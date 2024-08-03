import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

const CartDrawer = ({ open, onClose }) => {
  const cartItems = [
    { id: 1, name: "Entrecot de Vaca", price: 25000, quantity: 2 },
    { id: 2, name: "Chuletas de Cerdo", price: 15000, quantity: 1 },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, padding: 2 }} role="presentation">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Carrito</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id} disableGutters>
              <ListItemText
                primary={item.name}
                secondary={`Cantidad: ${item.quantity} - $${item.price.toLocaleString('es-CL')}`}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Total: ${totalPrice.toLocaleString('es-CL')}</Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>Proceder al Pago</Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
