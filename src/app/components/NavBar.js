'use client';
import React from 'react';
import {
  AppBar,
  Toolbar,
  InputBase,
  Box,
  IconButton,
  MenuItem,
  ListItemIcon,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';
import Head from 'next/head';
import { Search, Menu as MenuIcon } from '@mui/icons-material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useState } from 'react';
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'What we do', href: '/what-we-do' },
    { label: 'Why we do it', href: '/why-we-do-it' },
    { label: 'Who we are', href: '/who-we-are' },
    { label: 'Contact us', href: '/contact-us' },
    { label: 'Blog', href: '/blog' },
    { label: 'Donate', href: '/donate' },
  ];

  const renderMenu = (
    <List>
      {menuItems.map((item, index) => (
        <ListItem
          button
          key={index}
          component={Link}
          href={item.href}
          onClick={toggleDrawer(false)}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
  return (
    <AppBar
      position='relative'
      elevation={4}
      sx={{ bgcolor: 'white', color: '#333' }}
    >
      <Toolbar
        sx={{
          py: { xs: 2, lg: 3 },
          px: { xs: 2, lg: 10 },
          minHeight: { xs: 60, lg: 80 },
          borderBottom: '1px solid #fff',
          boxShadow: 'none',
        }}
      >
        <Box
          component='a'
          href='/'
          sx={{
            flexShrink: 0,
            width: { xs: '90%', sm: 'auto' },
            mb: { xs: 2, sm: 0 },
          }}
        >
          <img src='/images/logo.png' alt='logo' style={{ width: 200 }} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              py: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '50%',
                alignItems: 'center',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <InputBase
                placeholder='Search something...'
                sx={{
                  bgcolor: '#fff',
                  px: 2,
                  width: '50%',
                  transition: 'background-color 0.3s ease',
                  '&:focus-within': { bgcolor: 'transparent' },
                  borderLeft: '8px solid white',
                }}
                startAdornment={<Search sx={{ mr: 1, color: '#333' }} />}
              />
              <MenuItem
                sx={{
                  width: '25%',
                  display: { xs: 'none', sm: 'flex' },
                  px: 3,
                  py: 1,
                  background: '#e0e0e0',
                  borderLeft: '8px solid white',
                }}
                component={Link}
                href='/blog'
              >
                <Typography variant='body2' fontWeight='medium'>
                  Blog
                </Typography>
              </MenuItem>

              <MenuItem
                sx={{
                  width: '25%',
                  display: { xs: 'none', sm: 'flex' },
                  px: 3,
                  py: 1,
                  background: '#00B5E2',
                  color: 'white',
                  borderLeft: '8px solid white',
                }}
                component={Link}
                href='/donate'
              >
                <Typography variant='body2' fontWeight='medium'>
                  Donate
                </Typography>
              </MenuItem>
            </Box>
          </Box>

          <Box
            sx={{
              width: '100%',
              ml: 'auto',
              mt: { xs: 2, lg: 0 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%',
              }}
            >
              <MenuItem
                sx={{
                  width: '25%',
                  display: { xs: 'none', sm: 'flex' },
                  px: 3,
                  py: 1,
                  background: '#e0e0e0',
                }}
                component={Link}
                href='/what-we-do'
              >
                <Typography variant='body2' fontWeight='medium'>
                  What we do
                </Typography>
              </MenuItem>

              <MenuItem
                sx={{
                  width: '25%',
                  display: { xs: 'none', sm: 'flex' },
                  px: 3,
                  py: 1,
                  background: '#e0e0e0',
                  borderLeft: '8px solid white',
                }}
                component={Link}
                href='/why-we-do-it'
              >
                <Typography variant='body2' fontWeight='medium'>
                  Why we do it
                </Typography>
              </MenuItem>

              <MenuItem
                sx={{
                  width: '25%',
                  display: { xs: 'none', sm: 'flex' },
                  px: 3,
                  py: 1,
                  background: '#e0e0e0',
                  borderLeft: '8px solid white',
                }}
                component={Link}
                href='/who-we-are'
              >
                <Typography variant='body2' fontWeight='medium'>
                  Who we are
                </Typography>
              </MenuItem>

              <MenuItem
                sx={{
                  width: '25%',
                  display: { xs: 'none', sm: 'flex' },
                  px: 3,
                  py: 1,
                  background: '#e0e0e0',
                  borderLeft: '8px solid white',
                }}
                component={Link}
                href='/gallery'
              >
                <Typography variant='body2' fontWeight='medium'>
                  Gallery
                </Typography>
              </MenuItem>

              <MenuItem
                sx={{
                  width: '25%',
                  display: { xs: 'none', sm: 'flex' },
                  px: 3,
                  py: 1,
                  background: '#e0e0e0',
                  borderLeft: '8px solid white',
                }}
                component={Link}
                href='/contact-us'
              >
                <Typography variant='body2' fontWeight='medium'>
                  Contact us
                </Typography>
              </MenuItem>
            </Box>
          </Box>
          {/* Burger Menu for Mobile/Tablet */}
          <IconButton
            color='inherit'
            edge='end'
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor='right'
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiDrawer-paper': {
                width: 250, // Adjust width here to make the drawer wider
              },
            }}
          >
            {renderMenu}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const NavBar = () => {
  return (
    <>
      <Head>
        <title>Mpumelelo Foundation - Empowering Change</title>
      </Head>
      <Header />
    </>
  );
};

export default NavBar;
