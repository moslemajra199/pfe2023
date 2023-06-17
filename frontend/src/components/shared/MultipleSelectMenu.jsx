import React, { useState } from 'react';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import { Form } from 'react-bootstrap';
const MultipleSelectMenu = ({ options, selectedOptions, label, handleOptionChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Form.Group controlId="formMultipleSelect">
      <div className="d-flex justify-content-between align-items-center">
        <Form.Label>{label}</Form.Label>
        {menuOpen ? (
          <MdOutlineExpandMore
            style={{
              fontSize: '2rem',
              background: 'blue',
              color: '#fff',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            onClick={handleMenuClick}
          />
        ) : (
          <MdOutlineExpandLess
            style={{
              fontSize: '2rem',
              background: 'blue',
              color: '#fff',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            onClick={handleMenuClick}
          />
        )}
      </div>
      {menuOpen ? (
        <div>
          {options.map((option) => (
            <Form.Check
              key={option.id}
              type="checkbox"
              id={`option-${option.id}`}
              label={option.name}
              checked={selectedOptions.includes(option.id)}
              onChange={() => handleOptionChange(option.id)}
            />
          ))}
        </div>
      ) : null}
    </Form.Group>
  );
};

export default MultipleSelectMenu;
