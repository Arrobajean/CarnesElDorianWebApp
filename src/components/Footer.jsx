import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <ul>
              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <ul>
              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <ul>
              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  Instagram
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'© '}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
