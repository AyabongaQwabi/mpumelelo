import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mpumelelo Foundation
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Our Work</Button>
          <Button color="inherit">Get Involved</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
