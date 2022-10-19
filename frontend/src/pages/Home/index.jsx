import React, { useContext, useEffect, useState } from 'react';

import { images } from '../../constants';
import { LoadScreenContext } from '../../contexts/LoadScreenContext';
import Button from '../../components/Button';
import Background from '../../components/Background';
import { api } from '../../api';

import * as S from './styles';
import Post from '../../containers/Post';

export default function Home() {
  const loadScreen = useContext(LoadScreenContext);

  const [posts, setPosts] = useState([]);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        loadScreen.startLoadingStage({ stage: 'loading-posts', message: 'Carregando posts...' });

        const postsData = await api.listPosts();

        setPosts(postsData);
      } catch {
        setHasError(true);
      } finally {
        loadScreen.stopLoadingStage('loading-posts');
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {!hasError && (
        <Background />
      )}
      <S.Container>

        {hasError && (
          <S.ErrorContainer>
            <img src={images.backgroundError} alt="Error" />
            <div className="error-content">
              <div className="error-message">
                <h3>Oh não!</h3>
                <p>
                  Parece que encontramos um
                  {' '}
                  <strong>problema</strong>
                  {' '}
                  com o carregamento dos posts... :(
                </p>
              </div>
              <Button
                id="btn-try-again"
                type="button"
              >
                Tentar novamente
              </Button>
            </div>
          </S.ErrorContainer>
        )}

        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            likes={post.likes}
            date={post.createdAt}
          >
            {post.content}
          </Post>
        ))}
      </S.Container>
    </>
  );
}
