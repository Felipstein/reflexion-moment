import React from 'react';
import { House } from 'phosphor-react';

import FloatingButton from '../../components/FloatingButton';

export default function Networking() {
  return (
    <>
      <h1>Networking</h1>
      <FloatingButton
        icon={House}
      >
        Voltar para home
      </FloatingButton>
    </>
  );
}
