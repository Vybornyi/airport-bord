const baseUrl = 'https://api.iev.aero/api/flights/';

export const fetchFlightsData = date => fetch(`${baseUrl}${date}`);
