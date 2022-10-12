import React from 'react';
import { House } from 'phosphor-react';

import FloatingButton from '../../components/FloatingButton';

import * as S from './styles';

export default function Networking() {
  return (
    <S.Container>

      <div className="floating-button-container">
        <FloatingButton
          icon={House}
          to="/"
        >
          Voltar para home
        </FloatingButton>
      </div>
    </S.Container>
  );
}
