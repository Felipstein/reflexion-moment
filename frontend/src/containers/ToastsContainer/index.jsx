import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Toast from '../../components/Toast';

import * as S from './styles';
import EventManager from '../../libs/EventManager';

export default function ToastsContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    EventManager.on('addtoast', handleAddToast);
  }, []);

  function handleAddToast({ type, duration, content }) {
    setToasts((prevState) => [
      ...prevState,
      {
        id: Math.random(), type, duration, content,
      },
    ]);
  }

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
            duration={toast.duration}
            onRemoveToast={() => handleRemoveToast(toast.id)}
          >
            {toast.content}
          </Toast>
        ))}
      </AnimatePresence>
    </S.Container>
  );
}
