import React, { useContext, useEffect, useState } from 'react';
import api from '../../api';
import { AuthContext } from '../../contexts/AuthContext';

export default function Home() {
  const [users, setUsers] = useState([]);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    async function loadUsers() {
      const { data: usersData } = await api.get('/users');

      setUsers(usersData);
    }

    loadUsers();
  }, []);

  return (
    <>
      <h1>Usuários</h1>
      <ul className="users">
        {users && users.length > 0 && users.map((user) => (
          <li key={user.id}>
            <h3>
              <strong>ID: </strong>
              {user.id}
            </h3>
            <h3>
              <strong>Nome: </strong>
              {user.nome}
            </h3>
            <h3>
              <strong>E-mail: </strong>
              {user.email}
            </h3>
            <h3>
              <strong>Senha: </strong>
              {user.password}
            </h3>
          </li>
        ))}
      </ul>
      <button type="button" onClick={logout}>
        Sair
      </button>
    </>
  );
}
