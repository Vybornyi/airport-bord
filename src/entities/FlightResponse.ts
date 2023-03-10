import type { FlightArrival } from './FlightArrival';
import type { FlightDeparture } from './FlightDeparture';

export type FlightsResponse = {
  body: {
    departure: FlightDeparture[];
    arrival: FlightArrival[];
  };
  error: {
    code: number;
  };
};
