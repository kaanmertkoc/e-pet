import React, { useEffect } from 'react';
import '../Styles/SearchList.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from '../actions/petActions';
import { getUsers } from '../actions/userActions';
import Loader from '../Components/Loading';
import Message from '../Components/Message';
import { Link } from 'react-router-dom';

const SearchListScreen = ({ match }) => {
  const dispatch = useDispatch();

  const petList = useSelector(state => state.getPet);
  const { loading, error, pets } = petList;

  const usersList = useSelector(state => state.usersList);
  const { loading: loadingUsers, error: errorUser, users } = usersList;

  const filter = match.params.keyword;
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPets(filter));
  }, [dispatch, filter]);
  const getOwner = ownerId => {
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === ownerId) {
        return users[i].name;
      }
    }
  };

  return (
    <div className="search-list-container">
      <h6>Results</h6>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : loadingUsers ? (
        <Loader />
      ) : errorUser ? (
        <Message variant="danger">{errorUser}</Message>
      ) : (
        <>
          {pets.map(pet => (
            <Link
              style={{
                width: '100%',
                color: '#222831',
                textDecoration: 'none',
              }}
              to={`/search/${pet._id}`}
            >
              <div className="search-card">
                <img
                  src="/image1.png"
                  width="120px"
                  height="120px"
                  alt="cino"
                />
                <div className="search-info">
                  <h6>{pet.name}</h6>
                  <h6>{pet.race}</h6>
                  <h6>{pet.sex}</h6>
                  <h6>{getOwner(pet.owner)}</h6>
                  <h6>{pet.age}</h6>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default SearchListScreen;
