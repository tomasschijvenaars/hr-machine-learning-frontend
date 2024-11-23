import { useRouter } from "next/router";
import { useState } from "react";

// Core
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Menu,
  Typography,
  IconButton,
  Tooltip,
  MenuItem,
  Toolbar,
  useMediaQuery as muiUseMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Utils
import { PROFILE_PATH, ABOUT_PATH, TIPS_PATH, JOBS_PATH } from "@constants/path.const";
import { useAuth } from "@hooks";

// Style
import styles from "./app_bar.style";

function ResponsiveAppBar() {
  const theme = useTheme();
  const classes = styles(theme);

  const router = useRouter();

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

  const isMobile = muiUseMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="fixed" style={classes.appBarContainer}>
      <Container maxWidth="xl" style={classes.appBar}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            style={classes.appBarTitle}
            display={isMobile ? "none" : "show"}
          >
            HRML
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Button
                onClick={() => router.push(ABOUT_PATH)}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Over
              </Button>

              <Button
                onClick={() => router.push(TIPS_PATH)}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Tips
              </Button>
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HRML
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => router.push(JOBS_PATH)}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Vacatures
            </Button>

            <Button
              onClick={() => router.push("/#tips")}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Tips
            </Button>
          </Box>

          {/* User Avatar or Login */}
          <Box sx={{ flexGrow: 0 }}>
            {currentUser?._id ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={() => router.push(PROFILE_PATH)}>
                    <Typography sx={{ textAlign: "center", color: "black" }}>
                      Profile
                    </Typography>
                  </MenuItem>

                  <Divider />

                  <MenuItem onClick={() => router.push(JOBS_PATH)}>
                    <Typography sx={{ textAlign: "center", color: "black" }}>
                      Vacatures
                    </Typography>
                  </MenuItem>

                  <Divider />

                  <MenuItem onClick={logout}>
                    <Typography sx={{ textAlign: "center", color: "black" }}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Gebruiker" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
