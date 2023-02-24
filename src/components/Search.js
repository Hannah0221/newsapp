import React, { useEffect, useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState([]);

  const handleSearchInputChanges = (e) => {
    setSearchValue();
  };
  const callSearchFunction = (e) => {
    props.search(searchValue);
    // resetInputField();
  };
  return (
    <div className="search input-group mb-3">
      <form class="d-flex" role="search" />
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
      <button
        class="btn btn-secondary"
        type="submit"
        onClick={callSearchFunction}
      >
        Search
      </button>
      {/* <input
        class="form-control"
        placeholder="Search here"
        aria-label="Search here"
        aria-describedby="button-addon2"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <button
        onClick={callSearchFunction}
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        // type="submit"
        // value="SEARCH"
      >
        Button
      </button> */}
    </div>
  );
};

export default Search;
