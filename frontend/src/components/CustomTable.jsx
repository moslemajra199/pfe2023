import React from 'react';
import Table from 'react-bootstrap/Table';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaPencilAlt, FaPlusSquare } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../store';
import Loader from './shared/Loader';
import Message from './shared/Message';

const CustomTable = ({ headers, data }) => {
  const renderedHeaders = headers.map((item, index) => {
    return <th key={index}>{item}</th>;
  });

  const dispatch = useDispatch();
  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  const renderedData = data.map((dataItem) => {
    return (
      <tr key={dataItem.id}>
        <td>{dataItem.id}</td>
        <td>{dataItem.name}</td>
        <td>{dataItem.description}</td>
        <td>{dataItem.unit_price}</td>
        <td>{dataItem.createedAt}</td>
        <td>{dataItem.type}</td>
        <td>
          <ButtonGroup>
            <Button className="m-2" variant="primary" size="sm">
              <FaPlusSquare />
            </Button>
            <Button variant="secondary" className="m-2" size="sm">
              <FaPencilAlt />
            </Button>
            <Button
              onClick={() => handleRemoveProduct(dataItem)}
              variant="danger"
              className="m-2"
              size="sm"
            >
              X
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });
  return (
    <Table striped bordered hover>
      <thead className="table-dark text-light">
        <tr>
          <th>#</th>
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>{renderedData}</tbody>
    </Table>
  );
};

export default CustomTable;
