import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Squash as Hamburger } from "hamburger-react";
import HeaderInfo from "./HeaderInfo";
import CartDrawer from "./CartDrawer";
import MobileMenuDrawer from "./MobileMenuDrawer"; // Importa el componente MobileMenuDrawer

const Search = styled("div")(({ theme, open }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: open ? "200px" : "0px",
  opacity: open ? 1 : 0,
  transition: "width 0.5s, opacity 0.5s",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    width: open ? "200px" : "0px",
    opacity: open ? 1 : 0,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SearchIconButton = styled(IconButton)(({ theme, open }) => ({
  transition: "transform 0.5s",
  transform: open ? "translateX(-216px)" : "translateX(0)",
}));

export default function Navegation() {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleSearchBlur = () => {
    setSearchOpen(false);
  };

  const handleCartClick = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderInfo />
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}>
            <Tooltip title="Menú">
              <IconButton
                size="large"
                aria-label="open drawer"
                aria-haspopup="true"
                onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                color="inherit"
              >
                <Hamburger
                  toggled={isHamburgerOpen}
                  toggle={setIsHamburgerOpen}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "none", lg: "block" },
              mr: 2,
            }}
          >
            <Typography variant="h6" component="a" href="#" sx={{ mr: 2 }}>
              Nosotros
            </Typography>
            <Typography variant="h6" component="a" href="#" sx={{ mr: 2 }}>
              Contacto
            </Typography>
            <Typography variant="h6" component="a" href="#">
              Tienda
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <ClickAwayListener onClickAway={handleSearchBlur}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Search open={searchOpen}>
                <StyledInputBase
                  placeholder="Buscar…"
                  inputProps={{ "aria-label": "search" }}
                  autoFocus
                />
              </Search>
              <Tooltip title="Buscar">
                <SearchIconButton
                  size="large"
                  color="inherit"
                  aria-label="open search"
                  onClick={handleSearchClick}
                  open={searchOpen}
                >
                  <SearchIcon />
                </SearchIconButton>
              </Tooltip>
            </Box>
          </ClickAwayListener>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <Tooltip title="Carrito">
              <IconButton
                size="large"
                aria-label="show cart"
                color="inherit"
                onClick={handleCartClick}
              >
                <Badge badgeContent={4} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileMenuDrawer
        open={isHamburgerOpen}
        onClose={() => setIsHamburgerOpen(false)}
      />
      <CartDrawer open={cartOpen} onClose={handleCartClose} />
    </Box>
  );
}
