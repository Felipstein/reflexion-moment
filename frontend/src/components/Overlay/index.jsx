import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Overlay({
  location, rgba, blur, zIndex,
}) {
  console.log(location, rgba, blur, zIndex);

  return (
    <S.Overlay
      location={location}
      rgba={rgba}
      blur={blur}
      zIndex={zIndex}
    />
  );
}

Overlay.propTypes = {
  rgba: PropTypes.string,
  blur: PropTypes.number,
  zIndex: PropTypes.number,
  location: PropTypes.shape({
    position: PropTypes.oneOf(['static', 'fixed', 'absolute', 'relative', 'sticky', '-webkit-sticky', '-ms-page']),
    top: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
  }),
};

Overlay.defaultProps = {
  rgba: 'rgba(0, 0, 0, 0.3)',
  blur: 3,
  zIndex: '1',
  location: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  },
};
