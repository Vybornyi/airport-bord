import type { FlightInfo, AirportInfo } from './FlightInfo';

export type FlightArrival = FlightInfo & {
  airportFromID: AirportInfo;
  belt: string;
  timeStandCalc: string;
  timeStandFact: string;
  timeLandCalc: string;
  timeArrExpectCalc: string;
  timeArrShedule: string;
};
