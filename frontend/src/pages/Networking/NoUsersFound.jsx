import React from 'react';
import { MagnifyingGlassMinus } from 'phosphor-react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function NoUsersFound({ termSearched }) {
  return (
    <S.NoUsersFoundContainer>
      <MagnifyingGlassMinus />
      <span>
        Nenhum resultado foi encontrado para
        {' '}
        <strong>
          ”
          {termSearched}
          ”
        </strong>
        .
      </span>
    </S.NoUsersFoundContainer>
  );
}

NoUsersFound.propTypes = {
  termSearched: PropTypes.string.isRequired,
};
