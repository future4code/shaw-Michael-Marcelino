import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const LoginPage = () => {
  return (
    <>
      {" "}
      <h2>
        {" "}
        hello world!!
        <br />
        vamo que vamo
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <hr />
      </h2>
    </>
  );
};
export default LoginPage;
