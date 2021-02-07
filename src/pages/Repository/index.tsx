import React from 'react';
import { useRouteMatch, Link} from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './style';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="GithubExplorer"/>
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars.githubusercontent.com/u/69817179?v=4" alt=""/>
                    <div>
                        <strong>rocketeseat/unform</strong>
                        <p>Descição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="ssd">
                    <div>
                        <strong>ererere</strong>
                        <p>ererere</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
