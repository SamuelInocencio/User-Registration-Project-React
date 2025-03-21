import { useRef } from 'react';
import api from '../../services/api';

import Button from '../../components/Button';
import TopBackground from '../../components/TopBackground';

import {
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel,
  Title,
} from './styles';

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value,
    });
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome <span>*</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />

            <InputLabel>
              Idade <span>*</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>
            Email <span>*</span>
          </InputLabel>
          <Input type="email" placeholder="Email do usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser}>
          Cadastrar Usuário
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
