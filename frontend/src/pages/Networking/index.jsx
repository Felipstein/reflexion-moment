import React, {
  useContext, useEffect, useMemo, useState,
} from 'react';
import { House } from 'phosphor-react';

import Background from '../../components/Background';
import FloatingButton from '../../components/FloatingButton';
import Input from '../../components/Input';
import toast from '../../utils/toast';
import { api } from '../../api';
import UserCard from '../../containers/UserCard';
import { AuthContext } from '../../contexts/AuthContext';
import LoadingScreen from '../../containers/LoadingScreen';

import * as S from './styles';
import NoUsers from './NoUsers';

export default function Networking() {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const filteredUsers = useMemo(() => users.filter((userObj) => userObj.id !== user.id), [users]);

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
      <LoadingScreen />

      <S.Header>
        <div className="header-top">
          <h1 id="header-title">
            Networking
          </h1>
        </div>

        {filteredUsers.length > 0 && (
          <div className="header-bottom">
            <Input
              type="text"
              placeholder="Procurar por nome..."
            />
          </div>
        )}

      </S.Header>

      {filteredUsers.map((userObj) => (
        <UserCard
          key={userObj.id}
          user={userObj}
        />
      ))}

      {filteredUsers.length === 0 && (
        <>
          <Background />
          <NoUsers />
        </>
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
