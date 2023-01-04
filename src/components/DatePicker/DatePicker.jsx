import React, { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import './datePicker.scss';
import {
  formatDateYYMMD,
  formatDateDMM,
  getPrevDay,
  getNextDay,
  getQueryParams,
} from '../../utils/utils';
import DayButton from '../DayButton/DayButton';

const DatePicker = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const { date, search } = getQueryParams(location);
  const [selectedDate, onChangeSelectedDate] = useState(date);

  const onChangeDateInput = e => {
    onChangeSelectedDate(formatDateYYMMD(e.target.value));
    setSearchParams({
      search,
      date: formatDateYYMMD(e.target.value),
    });
  };
  const handleDaysNavigation = dateOfWeek => {
    setSearchParams({
      search,
      date: dateOfWeek,
    });
    onChangeSelectedDate(dateOfWeek);
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
