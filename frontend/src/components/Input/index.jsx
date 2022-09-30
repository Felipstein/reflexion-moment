import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Input({ disabled, error, ...rest }) {
  return (
    <S.Wrapper hasError={!!error && !disabled}>
      <input
        disabled={disabled}
        {...rest}
      />
      {error && !disabled && (
        <small>
          {error}
        </small>
      )}
    </S.Wrapper>
  );
}

Input.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
  error: null,
};
