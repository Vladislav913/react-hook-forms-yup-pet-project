import React, { useEffect, useState } from 'react';

import Button from '@mui/material/ButtonBase';
import { contained, outlined } from '../theme';
import CustomerModal from '../components/customers-modal/customers-modal';

import './customer.css';

function CustomersPage() {
  const [isOpen, setOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (isEdit) {
      setEdit(false);
    }
  };

  const handleOpenEdit = () => {
    setEdit(true);
    handleOpen(true);
  };

  return (
    <div className="container-page">
      <div className="box-btn">
        <Button onClick={handleOpenEdit} style={outlined}>
          Edite
        </Button>
        <Button onClick={handleOpen} style={contained}>
          Open
        </Button>
      </div>

      <CustomerModal open={isOpen} onClose={handleClose} isEdit={isEdit} />
    </div>
  );
}

export default CustomersPage;
