import { House } from 'phosphor-react';
import React from 'react';

import Background from '../../components/Background';
import FloatingButton from '../../components/FloatingButton';

import * as S from './styles';

export default function Home() {
  return (
    <>
      <Background />
      <S.Container />
      <FloatingButton
        icon={House}
      >
        Voltar para home
      </FloatingButton>
    </>
  );
}
