import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';
import PropTypes from 'prop-types';

import { useTheme } from 'styled-components';
import Overlay from '../Overlay';

import * as S from './styles';

export function DropdownMenuOverlay({ isOpened, ...props }) {
  return isOpened && (
    <Overlay
      location={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
      }}
      rgba="transparent"
      blur={1.5}
      {...props}
    />
  );
}

DropdownMenuOverlay.propTypes = {
  isOpened: PropTypes.bool,
};

DropdownMenuOverlay.defaultProps = {
  isOpened: false,
};

export function DropdownMenuRoot({ isOpened, children }) {
  return (
    <AnimatePresence>
      <DropdownMenuContainer
        isOpened={isOpened}
      >
        {children}
      </DropdownMenuContainer>
    </AnimatePresence>
  );
}

DropdownMenuRoot.propTypes = {
  isOpened: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

DropdownMenuRoot.defaultProps = {
  isOpened: false,
};

export function DropdownMenuContainer({ isOpened, children }) {
  return (
    <S.Container
      initial={false}
      animate={isOpened ? 'open' : 'closed'}
      variants={{
        open: {
          clipPath: 'inset(0% 0% 0% 0% round 10px)',
          pointerEvents: 'auto',
          transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
        },
        closed: {
          clipPath: 'inset(10% 50% 90% 50% round 10px)',
          pointerEvents: 'none',
          transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.3,
          },
        },
      }}
      style={{
        pointerEvents: isOpened ? 'auto' : 'none',
        display: isOpened ? 'flex' : 'none',
      }}
    >
      {children}
    </S.Container>
  );
}

DropdownMenuContainer.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export function DropdownMenuItem({ danger, children, asChild }) {
  const theme = useTheme();

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className="dropdownmenu-item" style={danger ? { color: theme.colors.danger.dark } : { color: '#111' }}>
      <motion.div
        variants={{
          open: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 24,
            },
          },
          closed: {
            opacity: 0,
            y: 20,
            transition: {
              duration: 0.2,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </Comp>
  );
}

DropdownMenuItem.propTypes = {
  danger: PropTypes.bool,
  children: PropTypes.string.isRequired,
  asChild: PropTypes.bool,
};

DropdownMenuItem.defaultProps = {
  danger: false,
  asChild: false,
};

export function DropdownMenuSeparatorItem() {
  return (
    <S.Separator />
  );
}

export const DropdownMenu = {
  Overlay: DropdownMenuOverlay,
  Root: DropdownMenuRoot,
  Container: DropdownMenuContainer,
  Item: DropdownMenuItem,
  SeparatorItem: DropdownMenuSeparatorItem,
};
