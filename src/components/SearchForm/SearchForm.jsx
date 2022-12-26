import React, { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import './searchForm.scss';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryParam = searchParams.get('search') || '';
  const dateQueryParam = searchParams.get('date') || '';
  const [inputValue, setInputValue] = useState(searchQueryParam);

  const location = useLocation();

  const onChange = e => {
    setInputValue(e.target.value);
    setSearchParams({
      search: inputValue,
      date: dateQueryParam,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="search-container">
      <h2 className="search-container__title">FLIGHT SEARCH</h2>
      <form className="search-container__form" onSubmit={handleSubmit}>
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
