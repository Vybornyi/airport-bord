import { configureStore } from '@reduxjs/toolkit';
import { flightsApi } from './flightsAPI';

const store = configureStore({
  reducer: {
    [flightsApi.reducerPath]: flightsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(flightsApi.middleware),
});
export default store;
