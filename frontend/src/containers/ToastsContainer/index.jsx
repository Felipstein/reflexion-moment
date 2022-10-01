import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Toast from '../../components/Toast';

import * as S from './styles';

export default function ToastsContainer() {
  const [toasts, setToasts] = useState([]);

  function handleRemoveToast(id) {
    setToasts((prevState) => prevState.filter((toast) => toast.id !== id));
  }

  return (
    <S.Container>
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            onRemoveToast={() => handleRemoveToast(toast.id)}
          >
            {toast.message}
          </Toast>
        ))}
      </AnimatePresence>
    </S.Container>
  );
}
