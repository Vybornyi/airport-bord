import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './flightsList.scss';
import { useGetFlightsListQuery } from '../../redux/flightsAPI';
import { formatDateYYMMD, getFlightsList, getFlightsFilteredList } from '../../utils/utils';
import Flight from '../Flight/Flight';

const HEADER_CELS = ['Terminal', 'Local Time', 'Destination', 'Status', 'Airline', 'Flight'];

const FlightsList = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const { date } = Object.fromEntries(urlParams);

  const { data = [], isFetching } = useGetFlightsListQuery(date);

  const flightsList = getFlightsList(data.body, location);

  const flightsFilteredList = getFlightsFilteredList(flightsList, location);

  if (isFetching) {
    return 'Fetching now';
  }
  return (
    <>
      <table className="flights-list" cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            {HEADER_CELS.map(name => (
              <th key={name} className={'th'}>
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {flightsFilteredList.map(flight => (
            <Flight key={flight.id} {...flight} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default FlightsList;
