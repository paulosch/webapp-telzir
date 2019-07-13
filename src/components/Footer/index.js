import React from 'react';

import Logo from '../../assets/logo_software_studio.png';
import { Container } from './styles';

const Footer = () => (
  <Container>
    <a href="/">
      <img src={Logo} alt="Telzir" width="150" />
    </a>
  </Container>
);

export default Footer;
