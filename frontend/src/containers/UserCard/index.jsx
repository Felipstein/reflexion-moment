import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

import * as S from './styles';

export default function UserCard({ user }) {
  const date = new Date(Date.parse(user.createdAt));

  return (
    <S.Container className="app__box-shadow">
      <S.Main>
        <h2 id="card-name">{user.name}</h2>
        <div className="card-date-wrapper">
          <strong id="card-date-label">
            Cadastrado em
          </strong>
          <small id="card-date">
            {date.toLocaleString('pt-br')}
          </small>
        </div>
      </S.Main>
      <S.Footer>
        <Button
          type="button"
        >
          Adicionar
        </Button>
      </S.Footer>
    </S.Container>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};
