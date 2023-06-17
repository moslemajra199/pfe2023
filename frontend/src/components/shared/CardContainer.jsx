import React from 'react';
import { Card, Container } from 'react-bootstrap';
const CardContainer = ({ children, variant }) => {
  return (
    <Card bg={variant} className='mb-2'>
      <Card.Body>
        <div className="d-flex text-light flex-column justify-content-center align-items-center">
          {children}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardContainer;
