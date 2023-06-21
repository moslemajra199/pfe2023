import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Card, Button } from 'react-bootstrap';
import Loader from '../shared/Loader';
import Message from '../shared/Message';
import Header from '../Header';
import Barcode from 'react-barcode';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../store';
import { updateProduct } from '../../store';
import { getProductById } from '../../store';
import { useParams } from 'react-router-dom';

const UpdateProudct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoadingPRoduct, setErrorLoadingProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productId } = useParams();

  const product = useSelector((state) => state.products.product);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    unit_price: 0,
    codeBar: '',
    type: '',
    quantityInStock: 0,
  });

  const { name, description, unit_price, codeBar, type, quantityInStock } =
    formData;

  const onFormSubmit = (event) => {
    event.preventDefault();
    const product = {
      id: productId,
      inputs: formData,
    };
    setIsLoading(true);
    dispatch(updateProduct(product))
      .unwrap()
      .then(() => {
        setIsLoading(false);
        // navigate('/admin');
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorLoadingProduct(error);
      });
    console.log(formData);
    setIsLoading(false);
  };

  const onMutated = (event) => {
    let input = event.target.value;
    if (
      event.target.id === 'unit_price' ||
      event.target.id === 'quantityInStock'
    ) {
      input = Number(event.target.value);
    }
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: input,
    }));
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(getProductById(+productId))
      .unwrap()
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorLoadingProduct(error);
      });
  }, []);

  if (errorLoadingPRoduct) {
    return <Message text={errorCreatingProduct.message} variant="danger" />;
  }
  if (product)
    return (
      <>
        <Header>
          <p className="text-light" style={{ fontSize: '2rem' }}>
            Update Product
          </p>
        </Header>
        <div className="d-flex p-10 justify-content-center align-items-center">
          <Card className="mt-5">
            <Card.Body>
              <Form onSubmit={onFormSubmit}>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control
                        id="name"
                        onChange={onMutated}
                        value={name}
                        placeholder="Enter product name..."
                      />
                    </FormGroup>
                  </Col>
                  <Col md={8}>
                    <FormGroup>
                      <Form.Label>Add Description</Form.Label>
                      <Form.Control
                        id="description"
                        type="textarea"
                        placeholder="Enter description...."
                        value={description}
                        onChange={onMutated}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <FormGroup>
                      <Form.Label>Unit Price</Form.Label>
                      <Form.Control
                        id="unit_price"
                        type="number"
                        placeholder="Enter unit price..."
                        value={unit_price}
                        onChange={onMutated}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Form.Label>Code Bar</Form.Label>
                      <Form.Control
                        id="codeBar"
                        value={codeBar}
                        onChange={onMutated}
                        type="text"
                        placeholder="Enter Codebar..."
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <FormGroup>
                      <Form.Label>Type</Form.Label>
                      <Form.Control
                        id="type"
                        type="String"
                        value={type}
                        onChange={onMutated}
                        placeholder="Enter product type..."
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Form.Label>Quantity in stock</Form.Label>
                      <Form.Control
                        id="quantityInStock"
                        type="number"
                        value={quantityInStock}
                        onChange={onMutated}
                        placeholder="Enter Number in Stock..."
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={8}>
                    <div className="d-grid gap-2">
                      <Button size="lg" variant="primary" type="submit">
                        {isLoading ? <Loader /> : 'Update Product'}
                      </Button>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="d-grid">
                      <Button size="lg" variant="warning" type="reset">
                        Clear
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
            <Barcode value={codeBar} />;
          </Card>
        </div>
      </>
    );
};

export default UpdateProudct;
