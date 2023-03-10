import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { getTime } from '../../common/utils/utils';
import type { Flight } from '../../entities/Flight';

const Flight: React.FC = (flight: Flight) => {
  const location = useLocation();
  const {
    terminal,
    localTime,
    destination,
    statusTime,
    airlineLogoSrc,
    airlineName,
    flightNumber,
  } = flight;
  return (
    <tr>
      <td className="terminal">{terminal}</td>
      <td>{getTime(localTime)}</td>
      <td>{destination}</td>
      <td>
        {location.pathname === '/departures'
          ? `Departed at ${getTime(statusTime)}`
          : `Arrived at ${getTime(statusTime)}`}
      </td>
      <td className="airline-info">
        <img className={'airline-info__logo'} src={airlineLogoSrc} alt="airline_logo" />
        <p className="airline-info__name">{airlineName}</p>
      </td>
      <td>{flightNumber}</td>
    </tr>
  );
};
export default Flight;
