import React from 'react';

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
        // TODO need src attribute
        alt="submit"
        name="qnaSearchInput"
        className="qnaSearchIcon"
        id="qnaSearchIcon"
      />
    </form>
  );
}

export default Search;
