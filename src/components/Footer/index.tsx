import React from 'react';
import {
  FaUser,
  FaBusinessTime,
  FaProjectDiagram,
  FaNetworkWired,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';

import { Container, Box, Icon, Title, IconsSocial } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Box>
        <Icon>
          <FaUser size={30} color="#fff" />
        </Icon>
        <Title>Sobre o autor</Title>
      </Box>
      <Box>
        <Icon>
          <FaBusinessTime size={30} color="#fff" />
        </Icon>
        <Title>Parceiros</Title>
      </Box>
      <Box>
        <Icon>
          <FaProjectDiagram size={30} color="#fff" />
        </Icon>
        <Title>Projetos</Title>
      </Box>
      <Box>
        <Icon>
          <FaNetworkWired size={30} color="#fff" />
        </Icon>
        <Title>Redes sociais</Title>
        <IconsSocial>
          <a href="http://facebook.com">
            <FaFacebook size={25} color="#385898" />
          </a>
          <a href="http://instragram.com">
            <FaInstagram size={25} color="#e30037" />
          </a>
          <a href="http://web.whatsapp.com">
            <FaWhatsapp size={25} color="#25d366" />
          </a>
          <a href="http://twitter.com">
            <FaTwitter size={25} color="#34b7f1" />
          </a>
          <a href="teste">
            <FaYoutube size={25} color="#ff0000" />
          </a>
        </IconsSocial>
      </Box>
    </Container>
  );
};

export default Footer;
