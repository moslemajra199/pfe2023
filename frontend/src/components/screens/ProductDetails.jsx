import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../store';
import Loader from '../shared/Loader';
import Message from '../shared/Message';
import { Row, Col, Card, ListGroup, Container, Image } from 'react-bootstrap';
import Barcode from 'react-barcode';
import HomeIcon from '../shared/HomeIcon';

const ProductDetails = () => {
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);
  const [loadingProductError, setLoadingProductError] = useState(null);

  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    setIsLoadingProduct(true);
    dispatch(getProductById(productId))
      .unwrap()
      .then(() => {
        setIsLoadingProduct(false);
      })
      .catch((error) => {
        setIsLoadingProduct(false);
        setLoadingProductError(error);
      });
  }, [dispatch, productId]);

  if (isLoadingProduct) {
    return (
      <div className="d-flex justify-content-center  align-item-center">
        <Container>
          <Loader />
        </Container>
      </div>
    );
  }

  if (loadingProductError) {
    return (
      <Container>
        <Message variant="danger" text={loadingProductError.message} />
      </Container>
    );
  }

  if (product)
    return (
      <>
        <Container>
          <Row>
            <Col md={3}>
              <HomeIcon />
            </Col>
            <Col md={6}>
              <h1 className=" m-5">Product Details</h1>
            </Col>
          </Row>
        </Container>

        <div className="p-3">
          <Row>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col md={6}>Product Name:</Col>
                    <Col md={6}>{product.name}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col md={6}>Unit Price:</Col>
                    <Col md={6}>${product.unit_price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col md={6}>Created At:</Col>
                    <Col md={6}>{product.createedAt}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col md={6}>Type:</Col>
                    <Col md={6}>{product.type}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col md={6}>Quantity In Stock:</Col>
                    <Col md={6}>{product.quantityInStock}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col md={6}>Quantity In Stock:</Col>
                    <Col md={6}>{product.bom.description}</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <Barcode value={product.codeBar} />
            </Col>

            <Col></Col>
          </Row>
        </div>
      </>
    );
};

export default ProductDetails;
