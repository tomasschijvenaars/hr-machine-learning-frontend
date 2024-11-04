import { useRouter } from "next/router";
import { useState } from "react";

// Core
import { useTheme } from "@mui/material/styles";
import { AppBar, Avatar, Box , Button, Container, Menu, Typography, IconButton,  Tooltip, MenuItem, Toolbar, useMediaQuery as muiUseMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

// Utils
import { PROFILE_PATH, CV_PATH } from "@constants/path.const";
import { useAuth } from "@hooks";

// Style
import styles from "./app_bar.style";


function ResponsiveAppBar() {
  const theme = useTheme();
  const classes = styles(theme);

  const router = useRouter();

  const navigationPages = [
    { name: 'Over', path: '/' },
    { name: 'Tips', path: '/about' },
    { name: 'CV', path: `/${CV_PATH}` }
  ];

  const { currentUser, logout } = useAuth();

  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isMobile = muiUseMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" style={classes.appBarContainer}>
      <Container maxWidth="xl" style={classes.appBar}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            style={classes.appBarTitel}
            display={isMobile ? "none" : "show"}
          >
            HRML
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              
              {navigationPages.map((page) => (
              <Button
                key={page.name}
                onClick={() => router.push(page.path)}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HRML
          </Typography>
    
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {navigationPages.map((page) => (
          <Button
            key={page.name}
            onClick={() => router.push(page.path)}
            sx={{ my: 2, color: 'black', display: 'block' }}
            >
            {page.name}
          </Button>
          ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => router.push(PROFILE_PATH)}>
                <Typography sx={{ textAlign: 'center', color: 'black' }}>Profile</Typography>
              </MenuItem>

              <MenuItem>
                <Typography sx={{ textAlign: 'center', color: 'black' }}>Account</Typography>
              </MenuItem>

              <MenuItem>
                <Typography sx={{ textAlign: 'center', color: 'black' }}>Dashboard</Typography>
              </MenuItem>

              <MenuItem onClick={logout}>
                <Typography sx={{ textAlign: 'center', color: 'black' }}>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
