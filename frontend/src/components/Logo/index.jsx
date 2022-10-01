import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Logo({ scale, mediaQueries }) {
  return (
    <S.Container scale={scale} mediaQueries={mediaQueries}>
      <h1>
        Momento de
        <strong>Reflexão</strong>
      </h1>
    </S.Container>
  );
}

Logo.propTypes = {
  scale: PropTypes.number,
  mediaQueries: PropTypes.func,
};

Logo.defaultProps = {
  scale: 1,
  mediaQueries: null,
};
