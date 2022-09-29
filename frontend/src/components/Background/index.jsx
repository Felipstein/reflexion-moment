import React from 'react';
import PropTypes from 'prop-types';

import { images } from '../../constants';

import * as S from './styles';

export default function Background({ size, location }) {
  return (
    <S.Wrapper size={size} location={location}>
      <img src={images.background} alt="Background" />
    </S.Wrapper>
  );
}

Background.propTypes = {
  size: PropTypes.number,
  location: PropTypes.shape({
    position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed']),
    top: PropTypes.string,
    left: PropTypes.string,
    transform: PropTypes.string,
  }),
};

Background.defaultProps = {
  size: 360,
  location: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};
