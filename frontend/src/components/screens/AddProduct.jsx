import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Card,
  Button,
  ButtonGroup,
} from 'react-bootstrap';
import Loader from '../shared/Loader';
import Header from '../Header';
import MultipleSelectMenu from '../shared/MultipleSelectMenu';

const addProduct = () => {
  const boms = [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
      console.log(selectedOptions);
    }
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <Header>
        <p className="text-light" style={{ fontSize: '2rem' }}>
          Add Product
        </p>
      </Header>
      <div className="d-flex p-10 justify-content-center align-items-center">
        <Card className="mt-5">
          <Card.Body>
            <Form>
              <Row>
                <Col md={4}>
                  <FormGroup controlId="name">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control placeholder="Enter product name..." />
                  </FormGroup>
                </Col>
                <Col md={8}>
                  <FormGroup controlId="description">
                    <Form.Label>Add Description</Form.Label>
                    <Form.Control
                      type="textarea"
                      placeholder="Enter description...."
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <FormGroup controlId="price">
                    <Form.Label>Unit Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter unit price..."
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup controlId="price">
                    <Form.Label>Code Bar</Form.Label>
                    <Form.Control type="text" placeholder="Enter Codebar..." />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <FormGroup controlId="price">
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      type="String"
                      placeholder="Enter product type..."
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup controlId="qty">
                    <Form.Label>Quantity in stock</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Number in Stock..."
                    />
                  </FormGroup>
                </Col>
              </Row>

              <div className="mt-5">
                <MultipleSelectMenu
                  selectedOptions={selectedOptions}
                  label="Select BOM"
                  options={boms}
                  handleOptionChange={handleOptionChange}
                />
              </div>

              <Row className='mt-3'>
                <Col md={8}>
                  <div className="d-grid">
                    <Button size="lg" variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Col>
                <Col md={4}>
                  <Button  size='lg' variant="warning" type="reset">
                    Clear
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default addProduct;
