import React, { useEffect } from 'react';
import api from '../../api';

export default function Home() {
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get('/users');

      console.log(data);
    }

    loadUsers();
  }, []);

  return (
    <h1>Home</h1>
  );
}
