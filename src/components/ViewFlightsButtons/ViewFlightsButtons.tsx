import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './viewFlightsButtons.scss';

const ViewFlightsButtons: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDeparture = location.pathname === '/departures';

  return (
    <div className="view-flights">
      <button
        onClick={() => {
          navigate({
            pathname: '/departures',
            search: location.search,
          });
        }}
        className={
          isDeparture
            ? 'view-flights__button view-flights__button_active view-flights__departures'
            : 'view-flights__button view-flights__departures'
        }
      >
        <i className="fa-sharp fa-solid fa-plane-departure"></i>
        departures
      </button>
      <button
        onClick={() => {
          navigate({
            pathname: '/arrivals',
            search: location.search,
          });
        }}
        className={
          !isDeparture
            ? 'view-flights__button_active view-flights__button view-flights__arrivals'
            : 'view-flights__button view-flights__arrivals'
        }
      >
        arrivals
        <i className="fa-solid fa-plane-arrival"></i>
      </button>
    </div>
  );
};

export default ViewFlightsButtons;
