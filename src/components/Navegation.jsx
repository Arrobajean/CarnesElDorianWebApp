import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Tooltip from '@mui/material/Tooltip';
import HeaderInfo from './HeaderInfo';  // Asegúrate de importar HeaderInfo correctamente
import CartDrawer from './CartDrawer'; // Importa el nuevo componente

const Search = styled('div')(({ theme, open }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: open ? '200px' : '0px',
  opacity: open ? 1 : 0,
  transition: 'width 0.5s, opacity 0.5s',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    width: open ? '200px' : '0px',
    opacity: open ? 1 : 0,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const SearchIconButton = styled(IconButton)(({ theme, open }) => ({
  transition: 'transform 0.5s',
  transform: open ? 'translateX(-216px)' : 'translateX(0)',
}));

export default function Navegation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = React.useState(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false); // Estado para el Drawer del carrito

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMobileHamburgerMenuOpen = Boolean(mobileMenuAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileHamburgerMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileHamburgerMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

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

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileHamburgerMenuId = 'primary-hamburger-menu-mobile';
  const renderMobileHamburgerMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileHamburgerMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileHamburgerMenuOpen}
      onClose={handleMobileHamburgerMenuClose}
    >
      <MenuItem onClick={handleMobileHamburgerMenuClose}>
        <Typography variant="h6" component="a" href="#">
          Nosotros
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleMobileHamburgerMenuClose}>
        <Typography variant="h6" component="a" href="#">
          Contacto
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleMobileHamburgerMenuClose}>
        <Typography variant="h6" component="a" href="#">
          Tienda
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderInfo /> {/* Asegúrate de incluir HeaderInfo aquí */}
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
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
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              <Search open={searchOpen}>
                <StyledInputBase
                  placeholder="Buscar…"
                  inputProps={{ 'aria-label': 'search' }}
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
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="Carrito">
              <IconButton size="large" aria-label="show cart" color="inherit" onClick={handleCartClick}>
                <Badge badgeContent={4} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Cuenta">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Tooltip title="Menú">
              <IconButton
                size="large"
                aria-label="open drawer"
                aria-controls={mobileHamburgerMenuId}
                aria-haspopup="true"
                onClick={handleMobileHamburgerMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderMobileHamburgerMenu}
      <CartDrawer open={cartOpen} onClose={handleCartClose} /> {/* Añadir el componente CartDrawer */}
    </Box>
  );
}
