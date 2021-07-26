import React from 'react';
import { Link } from 'react-router-dom';
import { FiPackage, FiUser } from 'react-icons/fi';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import Footer from '../../components/Footer';

import { Main } from './styles';

const Home: React.FC = () => {
  return(
    <>
      <Header />
      <PageTitle>Painel Administrativo</PageTitle>
      <Main>
        <div className="container">
          <Link className="module-button" to="/produtos">
            <FiPackage />
            <h2>Produtos</h2>
          </Link>
          <Link className="module-button" to="/clientes">
            <FiUser />
            <h2>Clientes</h2>
          </Link>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
