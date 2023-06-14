import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = ({ children }) => {
  return (
    <Navbar bg="primary">
      <Container className='d-flex justify-content-center align-items-center'>{children} </Container>
    </Navbar>
  );
};

export default Header;
