import * as React from 'react';
import { getFormatDM } from '../../common/utils/utils';
import './dayButton.scss';

type Button = {
  text: string;
  formatDate: () => string;
  selectedDate: string;
  handleDaysNavigation: (date: string) => void;
};

const DayButton: React.FC<Button> = ({ text, formatDate, selectedDate, handleDaysNavigation }) => {
  const date = formatDate();
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
      <p className="date-selection__day-number">{getFormatDM(date)}</p>
      <h3 className="date-selection__day-name">{text}</h3>
    </button>
  );
};
export default DayButton;
