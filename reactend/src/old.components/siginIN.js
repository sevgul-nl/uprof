import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import UserCreateForm from './userCreateForm';
import Snackbar from '@mui/material/Snackbar';

//import { SERVER_URL } from '../constants.js';

function SignIN() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [isAuthenticated, setAuth] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const signIn = () => {
    fetch('/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => {
        res.json();
      })
      .then((user) => {
        //alert('signin.then.data' + data);
        if (user !== undefined) {
          alert('user ' + user);
          setUser(user);
          setAuth(true);
          setOpen(true);
        } else {
          alert('user undefined');
          setAuth(false);
          setOpen(false);
        }
      })
      .catch((err) => {
        alert('uerror ' + err);
        console.error(err);
        setAuth(false);
        setOpen(false);
      });
  };

  if (isAuthenticated) {
    return <UserCreateForm />;
  } else {
    return (
      <div>
        <Stack spacing={2} alignItems="center" mt={2}>
          <TextField name="username" label="Username" onChange={handleChange} />
          <TextField
            type="password"
            name="password"
            label="Password"
            onChange={handleChange}
          />
          <Button variant="outlined" color="primary" onClick={signIn}>
            Sign in
          </Button>
        </Stack>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message="Login failed: Check your username and password"
        />
      </div>
    );
  }
}

export default SignIN;
