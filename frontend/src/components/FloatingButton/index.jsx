import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { Link } from 'react-router-dom';

import * as S from './styles';

export default function FloatingButton({
  icon: Icon, children, asChild, ...props
}) {
  const Comp = asChild ? Slot : Link;

  return (
    <S.Wrapper>
      <Comp
        id="fbtn-root"
        {...props}
      >
        <motion.div
          className="fbtn-inner"
          initial="reset"
          whileHover="hover"
          whileTap={{
            scale: 0.9,
          }}
          variants={{
            hover: {
              width: 240,
              transition: {
                type: 'just',
                duration: 0.3,
              },
            },
            reset: {
              transition: {
                type: 'just',
                delay: 0.2,
                duration: 0.3,
              },
            },
          }}
        >
          <Icon id="fbtn-icon" />
          <motion.div
            id="fbtn-content"
            variants={{
              hover: {
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
              reset: {
                opacity: 0,
                transition: {
                  duration: 0.15,
                },
              },
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </Comp>
    </S.Wrapper>
  );
}

FloatingButton.propTypes = {
  icon: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  asChild: PropTypes.bool,
};

FloatingButton.defaultProps = {
  asChild: false,
};
