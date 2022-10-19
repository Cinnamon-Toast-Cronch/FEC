import React from 'react';
// import img from '../../assets/images/searchIcon.png';

const { useState } = React;

function Search(props) {
  const { search, setSearch, handleSearch } = props;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch(search);
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
      <input
        type="image"
        // src={img}
        alt="submit"
        name="qnaSearchInput"
        className="qnaSearchIcon"
        id="qnaSearchIcon"
      />
    </form>
  );
}

export default Search;
