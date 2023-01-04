import React from 'react';
import { useLocation } from 'react-router-dom';
import './flightsList.scss';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.css';
import { useGetFlightsListQuery } from '../../redux/flightsAPI';
import { getFlightsFilteredList, getQueryParams } from '../../utils/utils';
import Flight from '../Flight/Flight';
import NoFlights from '../NoFlights';

const HEADER_CELS = ['Terminal', 'Local Time', 'Destination', 'Status', 'Airline', 'Flight'];

const FlightsList = () => {
  const location = useLocation();
  const { date } = getQueryParams(location);

  const { data = [], isFetching } = useGetFlightsListQuery(date);

  const flightsFilteredList = getFlightsFilteredList(data.body, location);

  if (isFetching) {
    return (
      <Spinner
        style={{ width: '34px', height: '34px', marginTop: '25px' }}
        animation="border"
        variant="primary"
      />
    );
  }
  if (flightsFilteredList.length === 0) {
    return <NoFlights />;
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
