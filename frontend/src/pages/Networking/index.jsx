import React, { useEffect, useState } from 'react';
import { House } from 'phosphor-react';

import FloatingButton from '../../components/FloatingButton';
import toast from '../../utils/toast';

import * as S from './styles';
import { api } from '../../api';
import UserCard from '../../containers/UserCard';

export default function Networking() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const usersData = await api.listUsers();

        setUsers(usersData);
      } catch {
        toast({ type: 'danger', content: 'Não conseguimos buscar os usuários, desculpe :(' });
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <S.Container>

      {isLoading && (
        <h1>Carregando...</h1>
      )}

      {!isLoading && (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))
      )}

      <div className="floating-button-container">
        <FloatingButton
          icon={House}
          to="/"
        >
          Voltar para home
        </FloatingButton>
      </div>
    </S.Container>
  );
}
