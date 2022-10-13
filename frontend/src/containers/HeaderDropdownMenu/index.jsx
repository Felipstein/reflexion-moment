import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { DropdownMenu } from '../../components/DropdownMenu/DropdownMenu';

import * as S from './styles';
import { AuthContext } from '../../contexts/AuthContext';

export function HeaderDropdownMenu({ dropdownMenuIsOpen, onClose }) {
  const { logout } = useContext(AuthContext);

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

          <DropdownMenu.Item
            type="button"
            onClick={logout}
          >
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
