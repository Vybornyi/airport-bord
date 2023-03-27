import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FlightsResponse } from '../entities/FlightResponse';

export const flightsApi = createApi({
  reducerPath: 'flightsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.iev.aero/api/' }),
  endpoints: build => ({
    getFlightsList: build.query<FlightsResponse, string>({
      query: date => `flights/${date}`,
    }),
  }),
});

export const { useGetFlightsListQuery } = flightsApi;
