import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios do Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/29471840?s=460&u=c975b7708df2a8f40a9d1e4c1292802b2646658c&v=4"
                        alt=""
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Descrição completa do repositorio central</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/29471840?s=460&u=c975b7708df2a8f40a9d1e4c1292802b2646658c&v=4"
                        alt=""
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Descrição completa do repositorio central</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/29471840?s=460&u=c975b7708df2a8f40a9d1e4c1292802b2646658c&v=4"
                        alt=""
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Descrição completa do repositorio central</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )
};

export default Dashboard;
