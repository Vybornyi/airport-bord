import type { FlightInfo, AirportInfo } from './FlightInfo';

export type FlightDeparture = FlightInfo & {
  airportToID: AirportInfo;
  checkinNo: string;
  delay: boolean;
  delayReasonID: {
    code: string;
    name: string;
  };
  gateNo: string;
  handlerID: {
    code: string;
    name: string;
  };
  timeBoard: string;
  timeDepExpectCalc: string;
  timeDepFact: string;
  timeDepShedule: string;
};
