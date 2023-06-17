import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store';
import Header from '../Header';
import { FaBox } from 'react-icons/fa';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CustomTable from '../CustomTable';
import Loader from '../shared/Loader';
import Message from '../shared/Message';
import CardContainer from '../shared/CardContainer';
import { BsFillBoxFill, BsFillGearFill, BsGearFill } from 'react-icons/bs';
import { MdFrontLoader } from 'react-icons/md';
import ProductBoard from '../ProductBoard';
import { LinkContainer } from 'react-router-bootstrap';

const AdminBoardScreen = () => {
  const headers = ['name', 'unit_price', 'createdAt', 'type', 'Actions'];
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [errorLoadingProducts, setErrorLoadingProduct] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { data, isLoading, error } = products;

  const x = ' This is a test';
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
        <BsFillGearFill style={{ color: '#fff', fontSize: '2rem' }} />
        <p style={{ fontSize: '2rem' }} className="text-light text-center m-3">
          Manage Your Tasks
        </p>
      </Header>
      <main className="mt-5">
        <Container>
          <Row>
            <Col lg={8}>
              {/* <ProductBoard headers={headers} data={data} /> */}
              <Outlet context={[headers, data, x]} />
            </Col>
            <Col lg={4}>
              <CardContainer variant="primary">
                <Link to="/admin">
                  <p style={{ fontSize: '2rem' }} className="text-light">
                    Products
                  </p>
                </Link>
                <BsFillBoxFill style={{ color: '#fff', fontSize: '5rem' }} />
              </CardContainer>
              <CardContainer variant="warning">
                <Link
                  to="/admin/machines"
                  style={{ textDecoration: 'none'}}
                >
                  <p
                    style={{
                      fontSize: '2rem',
                    }}
                    className="text-dark"
                  >
                    Machines
                  </p>
                </Link>
                <BsGearFill style={{ color: '#333', fontSize: '5rem' }} />
              </CardContainer>
              <CardContainer variant="secondary">
                <Link to="/admin/boms">
                  <p style={{ fontSize: '2rem' }} className="text-light">
                    BOM
                  </p>
                </Link>
                <MdFrontLoader style={{ color: '#fff', fontSize: '5rem' }} />
              </CardContainer>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default AdminBoardScreen;
