import React from 'react';
import PropTypes from 'prop-types';

import { DropdownMenu } from '../../components/DropdownMenu/DropdownMenu';

import * as S from './styles';

export function HomeDropdownMenu({ dropdownMenuIsOpen, onClose }) {
  return (
    <>
      <DropdownMenu.Overlay
        isOpened={dropdownMenuIsOpen}
        onClick={onClose}
      />
      <S.DropdownMenuContainer>
        <DropdownMenu.Root isOpened={dropdownMenuIsOpen}>
          <DropdownMenu.Item>
            Meus posts
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            Lista de amigos
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            Networking
          </DropdownMenu.Item>
          <DropdownMenu.SeparatorItem />
          <DropdownMenu.Item>
            Sair
          </DropdownMenu.Item>
        </DropdownMenu.Root>
      </S.DropdownMenuContainer>
    </>
  );
}

HomeDropdownMenu.propTypes = {
  dropdownMenuIsOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

HomeDropdownMenu.defaultProps = {
  dropdownMenuIsOpen: false,
};
