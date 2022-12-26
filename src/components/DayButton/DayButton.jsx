import React from 'react';
import { formatDateDMM } from '../../utils/utils';
import './dayButton.scss';

const DayButton = ({ text, formatDate, selectedDate, handleDaysNavigation }) => {
  const date = formatDate(new Date());
  const isSelectedButtom = date === selectedDate;

  return (
    <button
      onClick={() => handleDaysNavigation(date)}
      className={
        isSelectedButtom
          ? 'date-selection__button date-selection__button_selected'
          : 'date-selection__button'
      }
    >
      <p className="date-selection__day-number">{formatDateDMM(date)}</p>
      <h3 className="date-selection__day-name">{text}</h3>
    </button>
  );
};
export default DayButton;
