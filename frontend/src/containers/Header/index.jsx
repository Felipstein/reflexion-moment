import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { ReactComponent as MenuDropdownIcon } from '../../assets/images/icons/menu-dropdown.svg';
import Logo from '../../components/Logo';

import * as S from './styles';
import { HomeDropdownMenu } from '../../pages/Home/HomeDropdownMenu';
import Button from '../../components/Button';

export default function Header({ hasPostButton }) {
  const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState(false);

  function handleToggleDropdownMenu() {
    setDropdownMenuIsOpen((prevState) => !prevState);
  }

  return (
    <S.Container>
      <div className="header-content">
        <Logo />
        <div className="menu-actions">
          <motion.button
            type="button"
            id="btn-menu-dropdown"
            onClick={handleToggleDropdownMenu}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <h2>Luís Felipe</h2>
            <motion.div
              className="menu-dropdown-icon"
              animate={dropdownMenuIsOpen ? ({
                rotate: 180,
              }) : ({
                rotate: 0,
              })}
              transition={{
                duration: 0.35,
                ease: 'easeOut',
              }}
            >
              <MenuDropdownIcon />
            </motion.div>
          </motion.button>
          <HomeDropdownMenu
            dropdownMenuIsOpen={dropdownMenuIsOpen}
            onClose={handleToggleDropdownMenu}
          />
          {hasPostButton && (
            <Button
              type="button"
              id="btn-new-post"
            >
              Novo post
            </Button>
          )}
        </div>
      </div>
      <S.Separator />
    </S.Container>
  );
}

Header.propTypes = {
  hasPostButton: PropTypes.bool,
};

Header.defaultProps = {
  hasPostButton: true,
};
