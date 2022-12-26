import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const flightsApi = createApi({
  reducerPath: 'flightsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.iev.aero/api/' }),
  endpoints: build => ({
    getFlightsList: build.query({
      query: date => `flights/${date}`,
    }),
  }),
});

export const { useGetFlightsListQuery } = flightsApi;
