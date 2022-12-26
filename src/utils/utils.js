import moment from 'moment';

export const formatDateDMM = date => moment(date).format('D/MM');
export const formatDateDMMYY = date => moment(date).format('DD-MM-yyyy');
export const formatDateYYMMD = date => moment(date).format('yyyy-MM-DD');

export const getPrevDay = date => moment(date).subtract(1, 'd').format('yyyy-MM-DD');
export const getNextDay = date => moment(date).add(1, 'd').format('yyyy-MM-DD');
export const getTime = date => moment(date).format('HH:mm');

export const getFlightsList = (flightsData, location) => {
  if (!flightsData) {
    return [];
  }

  return location.pathname === '/departures'
    ? flightsData.departure
    : flightsData.arrival.map(flight => {
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
export const getFlightsFilteredList = (flightsList, location) => {
  const { date, search } = Object.fromEntries(new URLSearchParams(location.search));
  if (!search) {
    return flightsList.filter(flight => {
      const { statusTime } = flight;
      return formatDateYYMMD(statusTime) === date;
    });
  }
  return flightsList.filter(flight => {
    const { statusTime, destination, airlineName, flightNumber } = flight;
    return (
      formatDateYYMMD(statusTime) === date &&
      (destination.toLowerCase().includes(search.toLowerCase()) ||
        airlineName.toLowerCase().includes(search.toLowerCase()) ||
        flightNumber.toLowerCase().includes(search.toLowerCase()))
    );
  });
};

// return (
//   (formatDateYYMMD(statusTime) === date && (
//     destination.toLowerCase().includes(search.toLowerCase()) ||
//     airlineName.toLowerCase().includes(search.toLowerCase()) ||
//     flightNumber.toLowerCase().includes(search.toLowerCase()))
//   );
