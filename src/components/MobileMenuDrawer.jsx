import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import StoreIcon from "@mui/icons-material/Store";

const MobileMenuDrawer = ({ open, onClose }) => {
  const menuItems = [
    { text: "Nosotros", href: "/about", icon: <InfoIcon /> },
    { text: "Contacto", href: "/contact", icon: <ContactMailIcon /> },
    { text: "Tienda", href: "/", icon: <StoreIcon /> },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component={Link} to={item.href}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileMenuDrawer;
