import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../store';
import Loader from '../shared/Loader';
import Message from '../shared/Message';
import { Row, Col, Card, ListGroup, Container } from 'react-bootstrap';
import CardContainer from '../shared/CardContainer';
import Barcode from 'react-barcode';

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
    return <div className="d-flex justify-content-center  align-item-center">
      <Container>
        <Loader />
      </Container>
    </div>;
  }

  if (loadingProductError) {
   return <Container>
      <Message variant="danger" text={loadingProductError.message} />
    </Container>;
  }

  if (product) return (
    <CardContainer>
      <Row>
      
      <ListGroup>
        
      </ListGroup>


      </Row>
    </CardContainer>
  );
};

export default ProductDetails;
