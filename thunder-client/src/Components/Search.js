import React from "react";

const Search = ({ search, onSearch }) => {
    return (
        <div className="search__container">
            <h3 className="search__title">Search Search Search!</h3>
            <input className="search__input"
                 type="text"
                 name="search"
                 placeholder="Search"
                 autoComplete="off"
                value={search}
                 onChange={e => onSearch(e.target.value)}
            />
      </div>
    )
}

export default Search;