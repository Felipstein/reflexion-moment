import React from 'react';
import PropTypes from 'prop-types';

import { images } from '../../constants';

import * as S from './styles';

export default function Background({ size, location, zIndex }) {
  return (
    <S.Wrapper size={size} location={location} zIndex={zIndex}>
      <img src={images.background} alt="Background" />
    </S.Wrapper>
  );
}

Background.propTypes = {
  size: PropTypes.string,
  location: PropTypes.shape({
    position: PropTypes.oneOf(['static', 'fixed', 'absolute', 'relative', 'sticky', '-webkit-sticky', '-ms-page']),
    top: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
  }),
  zIndex: PropTypes.number,
};

Background.defaultProps = {
  size: '36rem',
  location: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  zIndex: -1,
};
