import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from '@mui/material/Link';

const HeaderInfo = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#3c3c3c' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "center", flexWrap: "wrap" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: '#ffffff',
                flexWrap: "wrap",
                justifyContent: "center",
                textAlign: "center",
                gap: 2,
              }}
            >
              <Link href="https://wa.me/56912345678" target="_blank" color="inherit" underline="none" sx={{ display: "flex", alignItems: "center" }}>
                <WhatsAppIcon />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  +56 9 1234 5678
                </Typography>
              </Link>
              <Link href="mailto:contacto@ficticio.com" color="inherit" underline="none" sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon sx={{ ml: 2 }} />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  contacto@ficticio.com
                </Typography>
              </Link>
              <Link href="https://www.google.com/maps/place/San+Diego+1531,+Santiago+de+Chile" target="_blank" color="inherit" underline="none" sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon sx={{ ml: 2 }} />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  San Diego 1531, Santiago de Chile
                </Typography>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default HeaderInfo;
