// MobileMenuDrawer.js
import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';

const MobileMenuDrawer = ({ open, onClose }) => {
  const menuItems = [
    { text: 'Nosotros', href: '#' },
    { text: 'Contacto', href: '#' },
    { text: 'Tienda', href: '#' },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation" onClick={onClose} onKeyDown={onClose}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component="a" href={item.href}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileMenuDrawer;
