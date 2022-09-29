import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Logo({ isBig }) {
  return (
    <S.Container isBig={isBig}>
      <h1>
        Momento de
        <strong>Reflexão</strong>
      </h1>
    </S.Container>
  );
}

Logo.propTypes = {
  isBig: PropTypes.bool,
};

Logo.defaultProps = {
  isBig: false,
};
