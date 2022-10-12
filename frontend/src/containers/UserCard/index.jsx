import React from 'react';
import PropTypes from 'prop-types';

export default function UserCard({ user }) {
  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.createdAt}</h1>
    </>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.object.isRequired,
  }).isRequired,
};
