import React from 'react';
import { BsFillHouseFill } from 'react-icons/bs';
import { LinkContainer } from 'react-router-bootstrap';

const HomeIcon = () => {
  return (
    <LinkContainer to="/admin">
      <BsFillHouseFill size="3rem" color='red' cursor="pointer"/>
    </LinkContainer>
  );
};

export default HomeIcon;
