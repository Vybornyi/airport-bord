const MainSearch = () => {
  const [inputValue, onChangeInput] = useState('');
  return (
    <section className="main-search">
      <h2 className="main-search__title">FLIGHT SEARCH</h2>
      <div className="search-block">
        <form className="search-block__form">
          <input
            onChange={e => onChangeInput(e.target.value)}
            type="text"
            className="search-block__input"
            placeholder="Airline, destination or flight #"
            value={inputValue}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
          <Link to={`departures?search=${inputValue}`} className="search-block__link">
            SEARCH
          </Link>
        </form>
      </div>
      <div className="show-flights">
        <button className="show-flights__button show-flights__departures">
          <i className="fa-sharp fa-solid fa-plane-departure"></i>
          all departures
        </button>
        <button className="show-flights__button show-flights__arrivals">
          all arrivals
          <i className="fa-solid fa-plane-arrival"></i>
        </button>
      </div>
    </section>
  );
};
export default MainSearch;
