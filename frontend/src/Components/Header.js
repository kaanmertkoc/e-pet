import React, { useState } from 'react';
import '../Styles/Header.css';
import { Form, Button } from 'react-bootstrap';

const Header = ({ history }) => {
  const [search, setSearch] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    if (search.trim()) {
      history.push(`/searchList/${search}`);
    }
  };
  return (
    <div className="header">
      <div className="brand-name">
        <a href="/">E-Pet</a>
        <h6>We Love Animals</h6>
      </div>
      <Form onSubmit={submitHandler} className="search-bar">
        <Form.Control
          type="text"
          placeholder="Search..."
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Button type="submit" variant="outline-success">
          <i className="fa fa-search"></i>
        </Button>
      </Form>
    </div>
  );
};
export default Header;
