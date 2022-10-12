import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { ReactComponent as MenuDropdownIcon } from '../../assets/images/icons/menu-dropdown.svg';

import Logo from '../../components/Logo';
import Background from '../../components/Background';
import Button from '../../components/Button';

import * as S from './styles';
import { HomeDropdownMenu } from './HomeDropdownMenu';

export default function Home({ hasPostButton }) {
  const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState(false);

  function handleToggleDropdownMenu() {
    setDropdownMenuIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <Background />
      <S.Container>
        <S.Header>
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
        </S.Header>
      </S.Container>
    </>
  );
}

Home.propTypes = {
  hasPostButton: PropTypes.bool,
};

Home.defaultProps = {
  hasPostButton: true,
};
