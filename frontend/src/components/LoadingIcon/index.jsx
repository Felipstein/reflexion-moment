import React from 'react';
import PropTypes from 'prop-types';
import { BounceLoader, PuffLoader } from 'react-spinners';

import * as S from './styles';

export default function LoadingIcon({ isLoading }) {
  return isLoading && (
    <S.Container>
      <div className="icon">
        <BounceLoader
          color="#fff"
          size={54}
          speedMultiplier={0.5}
        />
      </div>
      <div className="icon">
        <PuffLoader color="#fff" size={128} />
      </div>
    </S.Container>
  );
}

LoadingIcon.propTypes = {
  isLoading: PropTypes.bool,
};

LoadingIcon.defaultProps = {
  isLoading: false,
};
