import { useNavigate } from 'react-router-dom';

import DefaultButton from '../../components/Button';
import TopBackground from '../../components/TopBackground';

function ListUsers() {

  const navigate = useNavigate();

  return (
    <>
      <TopBackground />
      <DefaultButton onClick={() => navigate('/')}>Voltar</DefaultButton>
    </>
  );
}

export default ListUsers;
