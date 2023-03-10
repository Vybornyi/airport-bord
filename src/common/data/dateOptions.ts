import * as moment from 'moment';
import { DATE_FORMAT } from './dateFormat';

type Day = {
  day: string;
  format: () => string;
};

export const DAYS_OPTIONS: Day[] = [
  {
    day: 'yesterday',
    format: () => moment().subtract(1, 'd').format(DATE_FORMAT),
  },
  {
    day: 'today',
    format: () => moment().format(DATE_FORMAT),
  },
  {
    day: 'tomorrow',
    format: () => moment().add(1, 'd').format(DATE_FORMAT),
  },
];
