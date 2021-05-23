import React from 'react';
import '../Styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="brand-name">
        <a href="/">E-Pet</a>
        <h6>We Love Animals</h6>
      </div>
      <form className="search-bar">
        <input type="text" placeholder="Search..." name="search" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Header;
