import React from 'react';
import Background from '../../components/Background';

import Logo from '../../components/Logo';

export default function Login() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Background />
      <Logo isBig />
    </div>
  );
}
