import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import Trash from '../../assets/trash.svg';
import DefaultButton from '../../components/Button';
import MainTitle from '../../components/Title';
import TopBackground from '../../components/TopBackground';
import {
  AvatarUser,
  CardUsers,
  Container,
  ContainerUsers,
  TrashIcon,
} from './styles';

function ListUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get('/usuarios');
      setUsers(data);
    }
    getUsers();
  }, []);

  async function deleteUser(id) {
    await api.delete(`/usuarios/${id}`);
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }

  const navigate = useNavigate();

  return (
    <Container>
      <TopBackground />
      <MainTitle>Listagem de Usuários</MainTitle>
      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
              
            </div>
            <TrashIcon src={Trash} alt="Lixeira" onClick={() => deleteUser(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>

      <DefaultButton type="button" onClick={() => navigate('/')}>
        Voltar
      </DefaultButton>
    </Container>
  );
}

export default ListUsers;
