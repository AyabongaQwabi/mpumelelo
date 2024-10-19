import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

export default function ContentSection({ title, description, items }) {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        {description}
      </Typography>
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography>{item.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
