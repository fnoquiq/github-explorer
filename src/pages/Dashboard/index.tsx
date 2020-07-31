import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/11557379?s=460&u=91134457a093500f4b1d2da5e0278cda15a4f18e&v=4"
            alt="Gabriel Mesquita"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/11557379?s=460&u=91134457a093500f4b1d2da5e0278cda15a4f18e&v=4"
            alt="Gabriel Mesquita"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/11557379?s=460&u=91134457a093500f4b1d2da5e0278cda15a4f18e&v=4"
            alt="Gabriel Mesquita"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
