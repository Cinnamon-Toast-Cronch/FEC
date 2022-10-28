import React from 'react';
import searchIcon from '../../assets/images/searchIcon.png';

function Search(props) {
  const { search, setSearch, handleSearch } = props;

  return (
    <form
      className="qnaSearch"
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch(search);
        setSearch('');
      }}
    >
      <input
        className="qnaSearchInput"
        placeholder="Have a question? Search for the answers..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button type="submit" className="qnaSearchIcon">
        <img
          type="image"
          src={searchIcon}
          alt="submit"
          name="qnaSearchInput"
          className="qnaSearchIcon"
          id="qnaSearchIcon"
        />
      </button>
    </form>
  );
}

export default Search;
