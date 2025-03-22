import { use, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import DefaultButton from '../../components/Button';
import TopBackground from '../../components/TopBackground';

function ListUsers() {
  useEffect(() => {
    async function getUsers() {
      const usersFromAPI = await api.get('/usuarios');
      console.log(usersFromAPI.data);
    }
    getUsers();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <TopBackground />
      <h1>Listagem de Usuários</h1>
      <DefaultButton onClick={() => navigate('/')}>Voltar</DefaultButton>
    </>
  );
}

export default ListUsers;
