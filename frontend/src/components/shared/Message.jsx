import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Message = ({ text, variant }) => {
  return <Alert variant={variant}>{text}</Alert>;
};

export default Message;
