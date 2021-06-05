import React, { useState } from 'react';
import '../Styles/Header.css';

const Header = () => {
  const [search, setSearch] = useState('');

  const submitHandler = e => {
    e.preventDefault();
  };
  return (
    <div className="header">
      <div className="brand-name">
        <a href="/">E-Pet</a>
        <h6>We Love Animals</h6>
      </div>
      <form className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit" onSubmit={submitHandler}>
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Header;
