import React, { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import './searchForm.scss';
import { getQueryParams } from '../../utils/utils';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { date, search } = getQueryParams(location);
  const [inputValue, setInputValue] = useState(search || '');

  const onChange = e => {
    const { value } = e.target;
    setInputValue(value);

    if (value) {
      searchParams.set('search', value);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="search-container">
      <h2 className="search-container__title">FLIGHT SEARCH</h2>
      <form className="search-container__form" onSubmit={e => e.preventDefault()}>
        <input
          onChange={onChange}
          type="text"
          className="search-container__input"
          placeholder="Airline, destination or flight #"
          value={inputValue}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
        <button type="submit" className="search-container__button">
          SEARCH
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
