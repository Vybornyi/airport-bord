import React from 'react';
import { Navigate, NavLink, useLocation } from 'react-router-dom';
import './viewFlightsButtons.scss';

const ViewFlightsButtons = () => {
  const location = useLocation();

  return (
    <div className="view-flights">
      <NavLink
        to={`departures${location.search}`}
        className={({ isActive }) =>
          isActive
            ? 'view-flights__button view-flights__button_active view-flights__departures'
            : 'view-flights__button view-flights__departures'
        }
      >
        <i className="fa-sharp fa-solid fa-plane-departure"></i>
        departures
      </NavLink>
      <NavLink
        to={`arrivals${location.search}`}
        className={({ isActive }) =>
          isActive
            ? 'view-flights__button_active view-flights__button view-flights__arrivals'
            : 'view-flights__button view-flights__arrivals'
        }
      >
        arrivals
        <i className="fa-solid fa-plane-arrival"></i>
      </NavLink>
    </div>
  );
};

export default ViewFlightsButtons;
