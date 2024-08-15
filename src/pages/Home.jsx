import React from 'react';
import { Container, Box, Typography, Grid, Avatar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Hero from '../components/Hero'; // Import the Hero component

const steps = [
  {
    icon: <ShoppingCartIcon />,
    title: 'Step 1: Order',
    description: 'Place your order easily through our website.'
  },
  {
    icon: <LocalShippingIcon />,
    title: 'Step 2: Delivery',
    description: 'We quickly process and deliver your order.'
  },
  {
    icon: <ThumbUpIcon />,
    title: 'Step 3: Enjoy',
    description: 'Enjoy our quality meats at your convenience.'
  }
];

const Home = () => {
  return (
    <div>
      <Hero /> {}
      <Box sx={{ py: 6, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Our Quick Process
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
            We make it easy for you to get the best quality meats in just a few steps.
          </Typography>
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                    {step.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{step.title}</Typography>
                    <Typography variant="body2" color="textSecondary">{step.description}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
