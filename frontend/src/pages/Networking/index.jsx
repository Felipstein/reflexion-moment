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
import { LoadScreenContext } from '../../contexts/LoadScreenContext';
import delay from '../../utils/delay';

import * as S from './styles';
import NoUsers from './NoUsers';
import NoUsersFound from './NoUsersFound';

export default function Networking() {
  const loadScreen = useContext(LoadScreenContext);
  const { user } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const filteredUsers = useMemo(() => (
    users.filter((userObj) => (
      userObj.id !== user.id && userObj.name.includes(searchInput)
    ))
  ), [users, searchInput]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        await delay(2000);
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

  useEffect(() => {
    loadScreen.setIsLoading(isLoading);
    loadScreen.setWhatIsLoading('Buscando usuários...');
  }, [isLoading]);

  function handleSearchInputChange(event) {
    event.preventDefault();

    setSearchInput(event.target.value);
  }

  return (
    <S.Container>
      <S.Header>
        <div className="header-top">
          <h1 id="header-title">
            Networking
          </h1>
        </div>

        {users.length > 0 && (
          <div className="header-bottom">
            <Input
              value={searchInput}
              type="text"
              placeholder="Procurar por nome..."
              onChange={handleSearchInputChange}
            />
          </div>
        )}

      </S.Header>

      {users.length > 0 && filteredUsers.length === 0 && (
        <NoUsersFound termSearched={searchInput} />
      )}

      {filteredUsers.map((userObj) => (
        <UserCard
          key={userObj.id}
          user={userObj}
        />
      ))}

      {users.length === 0 && (
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
