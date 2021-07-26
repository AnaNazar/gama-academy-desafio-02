import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

import logoImg from '../../assets/logo-header.svg';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <div className="container">
      <img src={logoImg} alt="The DevShop" />
      <Link to="/">
        <FiHome />
      </Link>
    </div>
  </Container>
);

export default Header;
