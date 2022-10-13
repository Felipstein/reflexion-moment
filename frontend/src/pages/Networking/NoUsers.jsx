import React from 'react';

import { images } from '../../constants';

import * as S from './styles';

export default function NoUsers() {
  return (
    <S.NoUserContainer>
      <img src={images.nothingFound} alt="Nada encontrado" />
      <div className="left-content">
        <h2>Nossa, que vazio...</h2>
        <p>
          Ainda não temos nenhum usuário cadastrado
          <small> (além de você, claro)</small>
          . Me parece que o mundo é só teu!
        </p>
      </div>
    </S.NoUserContainer>
  );
}
