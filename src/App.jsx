import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
  useSearchParams,
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SearchResult from './components/SearchResult/SearchResult';

const App = () => {
  const startDate = '2022-02-11';

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Navigate to={`/departures?date=${startDate}`} />} />
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<SearchResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
