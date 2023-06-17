import React from 'react';
import CustomTable from './CustomTable';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { useNavigate, useOutletContext } from 'react-router-dom';

const ProductBoard = () => {
  const [headers, data] = useOutletContext();
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-grid gap-2 mb-5">
        <Button
          onClick={() => navigate('/productDetails')}
          variant="primary"
          size="lg"
        >
          Go To products Details
        </Button>
      </div>

      <div>
        <CustomTable headers={headers} data={data} />
      </div>
    </div>
  );
};

export default ProductBoard;
