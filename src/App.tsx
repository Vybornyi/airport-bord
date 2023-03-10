import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SearchResult from './components/SearchResult/SearchResult';
import { INITIAL_DATE } from './common/data/initialDate';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Navigate to={`/departures?date=${INITIAL_DATE}`} />} />
        <Route path="/" element={<Layout />}>
          <Route path="arrivals/*" element={<SearchResult />} />
          <Route path="departures/*" element={<SearchResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
