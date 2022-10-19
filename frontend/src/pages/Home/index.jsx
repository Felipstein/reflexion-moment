import React, { useContext, useEffect, useState } from 'react';

import { LoadScreenContext } from '../../contexts/LoadScreenContext';
import Background from '../../components/Background';
import { api } from '../../api';

import * as S from './styles';

export default function Home() {
  const loadScreen = useContext(LoadScreenContext);

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        loadScreen.setIsLoading(true);
        loadScreen.setWhatIsLoading('Carregando posts...');

        const postsData = await api.listPosts();

        setPosts(postsData);
      } catch (err) {
        setError(err.message);
      } finally {
        loadScreen.setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Background />
      <S.Container>

        {error && (
          <p>{error}</p>
        )}

        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </S.Container>
    </>
  );
}
