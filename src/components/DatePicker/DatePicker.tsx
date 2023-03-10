import * as React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import './datePicker.scss';
import { getFormatDM, getFormatDate, getQueryParams } from '../../common/utils/utils';
import DayButton from '../DayButton/DayButton';
import { DAYS_OPTIONS } from '../../common/data/dateOptions';

const DatePicker: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { date } = getQueryParams(location.search);
  const [selectedDate, onChangeSelectedDate] = React.useState(date);

  const onChangeDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = getFormatDate(e.target.value);
    onChangeSelectedDate(date);
    searchParams.set('date', date);
    setSearchParams(searchParams);
  };

  const handleDaysNavigation = (dateOfWeek: string): void => {
    searchParams.set('date', dateOfWeek);
    setSearchParams(searchParams);
    onChangeSelectedDate(dateOfWeek);
  };
  return (
    <div className="date-picker">
      <div className="date-picker__calendar">
        <div className="date-picker__selected-date">{getFormatDM(selectedDate)}</div>
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
        {DAYS_OPTIONS.map(({ day, format }) => {
          return (
            <DayButton
              key={day}
              handleDaysNavigation={handleDaysNavigation}
              selectedDate={selectedDate}
              formatDate={format}
              text={day}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DatePicker;
