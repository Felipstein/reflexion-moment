import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { DropdownMenu } from '../../components/DropdownMenu/DropdownMenu';

import * as S from './styles';

export function HeaderDropdownMenu({ dropdownMenuIsOpen, onClose }) {
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

          <DropdownMenu.Item asChild>
            <Link to="/networking">
              Networking
            </Link>
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

HeaderDropdownMenu.propTypes = {
  dropdownMenuIsOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

HeaderDropdownMenu.defaultProps = {
  dropdownMenuIsOpen: false,
};
