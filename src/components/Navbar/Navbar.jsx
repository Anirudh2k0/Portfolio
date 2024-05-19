import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { darkTheme } from '@/data/themes';
import {
  List, ListItem, ListItemButton, ListItemText,
  AppBar, ThemeProvider, Toolbar, Typography, Divider,
  IconButton, Drawer, Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navbarLinks } from './data';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderListItems = () => (
    <List role="menubar" sx={{ width: 250,mt:8 }}>
      {navbarLinks.map((navbarItem, index) => (
        <ListItem key={index} role="menuitem" className="button">
          <ListItemButton component={NavLink} to={navbarItem.link} onClick={toggleDrawer}>
            <ListItemText primary={navbarItem.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography
            fontWeight="bold"
            fontSize={20}
            letterSpacing={3}
            flexGrow={1}
          >
            Anirudh
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <List
            role="menubar"
            sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row' }}
          >
            {navbarLinks.map((navbarItem, index) => (
              <ListItem key={index} role="menuitem" className="button">
                <ListItemButton component={NavLink} to={navbarItem.link}>
                  <ListItemText primary={navbarItem.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          {renderListItems()}
        </Box>
      </Drawer>
    </ThemeProvider>
  );
}

export default Navbar;
