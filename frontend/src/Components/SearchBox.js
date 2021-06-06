import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [search, setSearch] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    if (search.trim()) {
      history.push(`/search/${search}`);
    }
  };
  return (
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
  );
};

export default SearchBox;
