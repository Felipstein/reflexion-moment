import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import PropTypes from 'prop-types';

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
  return isOpened && (
    <DropdownMenuContainer>
      {children}
    </DropdownMenuContainer>
  );
}

DropdownMenuRoot.propTypes = {
  isOpened: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

DropdownMenuRoot.defaultProps = {
  isOpened: false,
};

export function DropdownMenuContainer({ children }) {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

DropdownMenuContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export function DropdownMenuItem({ children, asChild }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className="dropdownmenu-item">
      {children}
    </Comp>
  );
}

DropdownMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
};

DropdownMenuItem.defaultProps = {
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
