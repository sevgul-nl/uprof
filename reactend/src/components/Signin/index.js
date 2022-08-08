import React, { useState } from 'react';
import SigninModal from './signin-modal';
import { Button } from '@mui/material';
import './styles.css';
const Signin = () => {
  const [openModal, setOpenModal] = useState(false);
  const styles = {
    color: '#fff',
    textTransform: 'none',
    fontWeight: 800,
    fontSize: 15,
  };
  return (
    <>
      {' '}
      {openModal && openModal && (
        <SigninModal
          openModal={openModal}
          setOpenModal={() => setOpenModal(false)}
        />
      )}
      <Button onClick={() => setOpenModal(true)} sx={styles}>
        Sign in
      </Button>
    </>
  );
};
export default Signin;
