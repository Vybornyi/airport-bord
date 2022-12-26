import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import './SearchResult.scss';
import ViewFlightsButtons from '../ViewFlightsButtons/ViewFlightsButtons';
import DatePicker from '../DatePicker/DatePicker';
import FlightsList from '../FlightsList/FlightsList';

const SearchResult = ({ path, tooglePath }) => {
  return (
    <section className="search-result">
      <SearchForm />
      <ViewFlightsButtons />
      <DatePicker />
      <FlightsList />
    </section>
  );
};
export default SearchResult;
