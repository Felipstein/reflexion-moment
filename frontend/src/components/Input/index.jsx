import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Input({ error, ...rest }) {
  return (
    <S.Wrapper>
      <input
        {...rest}
      />
    </S.Wrapper>
  );
}

Input.propTypes = {
  error: PropTypes.string,
};

Input.defaultProps = {
  error: null,
};
