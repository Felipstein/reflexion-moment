import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Logo({ scale, blackWhite }) {
  return (
    <S.Container
      scale={scale}
      blackWhite={blackWhite}
    >
      <h1 id="logo-top">
        Momento de
        <strong id="logo-bottom">Reflexão</strong>
      </h1>
    </S.Container>
  );
}

Logo.propTypes = {
  scale: PropTypes.number,
  blackWhite: PropTypes.bool,
};

Logo.defaultProps = {
  scale: 1,
  blackWhite: false,
};
