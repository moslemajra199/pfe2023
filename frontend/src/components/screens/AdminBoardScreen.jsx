import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store';
import Header from '../Header';
import { FaBox } from 'react-icons/fa';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CustomTable from '../CustomTable';
import Loader from '../shared/Loader';
import Message from '../shared/Message';

const AdminBoardScreen = () => {
  const headers = ['name', 'description', 'unit_price', "createdAt", "type", "Actions"];
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [errorLoadingProducts, setErrorLoadingProduct] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { data, isLoading, error } = products;

  useEffect(() => {
    setIsProductLoading(true);
    dispatch(fetchProducts())
      .unwrap()
      .then(() => {
        setIsProductLoading(false);
      })
      .catch((err) => {
        setErrorLoadingProduct(error);
      });
  }, []);

  if (isProductLoading) return <Loader />;

  if (errorLoadingProducts)
    return <Message variant="danger" text={error.message} />;

  
  return (
    <div>
      <Header>
        <FaBox style={{ color: '#fff' }} />
        <p className="text-light display-4 text-center m-3">
          Manage Your Products
        </p>
      </Header>
      <main className="mt-5">
        <Container>
          <Row>
            <Col md={10}>
              <CustomTable headers={headers} data={data}/>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default AdminBoardScreen;
