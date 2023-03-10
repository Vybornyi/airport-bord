import * as moment from 'moment';
import type { Location } from 'react-router-dom';
import type { Flight } from '../../entities/Flight';
import type { FlightsResponse } from '../../entities/FlightResponse';
import { DATE_FORMAT, TIME_FORMAT, MONTH_FORMAT } from '../data/dateFormat';

export const getFormatDM = (date: string) => moment(date).format(MONTH_FORMAT);
export const getFormatDate = (date: string) => moment(date).format(DATE_FORMAT);
export const getTime = (date: string) => moment(date).format(TIME_FORMAT);

export const getQueryParams = (searchProp: string) => {
  const res = Object.fromEntries(new URLSearchParams(searchProp));
  return res;
};

export const getFlightsList = (
  flightsData: FlightsResponse['body'],
  pathnameProp: string,
): Flight[] => {
  const flightsType = pathnameProp === '/departures' ? 'departure' : 'arrival';
  return flightsData[flightsType].map((flight: any) => {
    const {
      ID,
      term,
      timeArrExpectCalc,
      timeDepExpectCalc,
      timeDepFact,
      timeTakeofFact,
      airline,
      codeShareData,
    } = flight;
    return {
      id: ID,
      terminal: term,
      localTime: timeArrExpectCalc || timeDepExpectCalc,
      destination: flight['airportFromID.city_en'] || flight['airportToID.city_en'],
      statusTime: timeDepFact || timeTakeofFact,
      airlineLogoSrc: airline.en.logoSmallName,
      airlineName: airline.en.name,
      flightNumber: codeShareData[0].codeShare,
    };
  });
};

export const getFlightsFilteredList = (
  flightsData: FlightsResponse['body'],
  location: Location,
): Flight[] => {
  if (!flightsData.arrival.length || !flightsData.departure.length) {
    return [];
  }

  const { date, search } = getQueryParams(location.search);

  const filteredFlights = getFlightsList(flightsData, location.pathname).filter(flight => {
    const { statusTime, destination, airlineName, flightNumber } = flight;
    const formattedStatusTime = getFormatDate(statusTime);

    if (search) {
      const formattedSearch = search.toLowerCase();
      return (
        formattedStatusTime === date &&
        (destination.toLowerCase().includes(formattedSearch) ||
          airlineName.toLowerCase().includes(formattedSearch) ||
          flightNumber.toLowerCase().includes(formattedSearch))
      );
    }

    return formattedStatusTime === date;
  });

  return filteredFlights.sort((firstFlight: Flight, nextFlight: Flight) =>
    moment.utc(firstFlight.statusTime).diff(moment.utc(nextFlight.statusTime)),
  );
};
