import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { icons } from '../../constants';

import * as S from './styles';

const icon = {
  warn: icons.warn,
};

export default function Toast({
  id, type, duration, onRemoveToast, children,
}) {
  const exitSide = useMemo(() => (Math.random() > 0.5 ? 'left' : 'right'), []);

  useEffect(() => {
    const timeoutKey = setTimeout(() => {
      onRemoveToast(id);
    }, duration);

    return () => {
      clearTimeout(timeoutKey);
    };
  }, []);

  return (
    <S.Container
      initial={{
        y: '40vh',
        scale: 1.2,
        transition: {
          duration: 0.6,
        },
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          type: 'just',
        },
      }}
      exit={{
        x: exitSide === 'left' ? '-80vw' : '80vw',
        opacity: 0,
        scale: 1.4,
        transition: {
          duration: 0.6,
        },
      }}
      className="app__box-shadow"
      tabIndex={0}
      role="button"
      onClick={onRemoveToast}
      type={type}
    >
      {icon[type] && (
        <img src={icon[type]} alt="Toast Icon" id="icon" />
      )}
      <div className="content">
        {children}
      </div>
    </S.Container>
  );
}

Toast.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['default', 'warn']),
  duration: PropTypes.number,
  onRemoveToast: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Toast.defaultProps = {
  type: 'default',
  duration: 5000,
};
