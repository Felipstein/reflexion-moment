import React from 'react';
import PropTypes from 'prop-types';
import { ChatTeardropText, Heart, Share } from 'phosphor-react';

import formatDate from '../../utils/formatDate';
import Button from '../../components/Button';

import * as S from './styles';

export default function Post({
  title, likes, date, children,
}) {
  return (
    <S.Container className="app__box-shadow">
      <S.TopContainer>
        <h2 id="post-title">
          {title}
        </h2>
        <div id="post-content">
          {children}
        </div>
      </S.TopContainer>
      <S.FooterContainer>
        <div className="post-left-info">
          <S.Action>
            <Heart className="post-action-icon like" />
            <small>{likes}</small>
          </S.Action>
          <S.Action>
            <ChatTeardropText className="post-action-icon comment" />
            <small>{likes}</small>
          </S.Action>
          <S.Action>
            <Share className="post-action-icon share" />
          </S.Action>
        </div>
        <div className="post-right-info">
          <span>{formatDate(date)}</span>
          <Button
            type="button"
            variant="card"
          >
            Responder
          </Button>
        </div>
      </S.FooterContainer>
    </S.Container>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
