import React, { useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import './DatePicker.scss';
import {
  formatDateYYMMD,
  formatDateDMMYY,
  formatDateDMM,
  getPrevDay,
  getNextDay,
} from '../../utils/utils';
import DayButton from '../DayButton/DayButton';

const DatePicker = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryParam = searchParams.get('search') || '';
  const dataQueryParam = searchParams.get('date') || '';
  const [selectedDate, onChangeSelectedDate] = useState(dataQueryParam);

  const onChangeDateInput = e => {
    onChangeSelectedDate(formatDateYYMMD(e.target.value));
    setSearchParams({
      search: searchQueryParam,
      date: formatDateYYMMD(e.target.value),
    });
  };
  const handleDaysNavigation = date => {
    setSearchParams({
      search: searchQueryParam,
      date,
    });
    onChangeSelectedDate(date);
  };
  return (
    <div className="date-picker">
      <div className="date-picker__calendar">
        <div className="date-picker__selected-date">{formatDateDMM(selectedDate)}</div>
        <form className="date-picker__form">
          <i className="fa-regular fa-calendar-days"></i>
          <input
            onChange={onChangeDateInput}
            value={selectedDate}
            type="date"
            className="date-picker__input"
          />
        </form>
      </div>
      <div className="date-selection">
        <DayButton
          handleDaysNavigation={handleDaysNavigation}
          selectedDate={selectedDate}
          formatDate={getPrevDay}
          text="yesterday"
        />
        <DayButton
          handleDaysNavigation={handleDaysNavigation}
          selectedDate={selectedDate}
          formatDate={formatDateYYMMD}
          text="today"
        />
        <DayButton
          handleDaysNavigation={handleDaysNavigation}
          selectedDate={selectedDate}
          formatDate={getNextDay}
          text="tomorrow"
        />
      </div>
    </div>
  );
};

export default DatePicker;
