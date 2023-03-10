import * as React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './searchResult.scss';
import ViewFlightsButtons from '../ViewFlightsButtons/ViewFlightsButtons';
import DatePicker from '../DatePicker/DatePicker';
import FlightsList from '../FlightsList/FlightsList';

const SearchResult: React.FC = () => (
  <section className="search-result">
    <SearchForm />
    <ViewFlightsButtons />
    <DatePicker />
    <FlightsList />
  </section>
);
export default SearchResult;
