import React from 'react';

import * as S from './styles';

// done just to keep token validation time
export default function LoadingScreen() {
  // const { isValidatingToken } = useContext(AuthContext);

  return (
    <>
      <S.Overlay />
      <S.Container>
        <h1 id="overlay-main-text">Loading...</h1>
        <footer className="overlay-footer">
          <span id="overlay-myself">
            2022 - Felipe Oliveira
          </span>
        </footer>
      </S.Container>
    </>
  );
}
