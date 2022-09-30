import React from 'react';
import { PuffLoader } from 'react-spinners';
import PropTypes from 'prop-types';

import { useTheme } from 'styled-components';
import ButtonStyled from './styles';

export default function Button({
  variant, disabled, loading, children, ...rest
}) {
  const theme = useTheme();

  return (
    <ButtonStyled
      whileHover={!disabled && !loading && { scale: 1.05 }}
      whileTap={!disabled && !loading && {
        scale: 1.1,
        transition: {
          duration: 0.05,
        },
      }}
      variant={variant}
      disabled={disabled || loading}
      loading={loading}
      {...rest}
    >
      <div className="children">
        {children}
      </div>
      {loading && (
        <PuffLoader
          className="loader"
          color={theme.colors.primary.darker}
          size="4rem"
        />
      )}
    </ButtonStyled>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['main', 'secondary', 'card']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'main',
  disabled: false,
  loading: false,
};
