'use client';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Container,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import Link from 'next/link';
import { Menu as MenuIcon, Close } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

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
    { label: 'What We Do', href: '/what-we-do' },
    { label: 'Why We Do It', href: '/why-we-do-it' },
    { label: 'Who We Are', href: '/who-we-are' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Donate', href: '/donate', highlight: true },
  ];

  const isActive = (path) => pathname === path;

  const renderMenu = (
    <List sx={{ width: 280, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
        <IconButton onClick={toggleDrawer(false)}>
          <Close />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Link href='/'>
          <img
            src='/images/logo.png'
            alt='Mpumelelo Foundation Logo'
            style={{ width: 180 }}
          />
        </Link>
      </Box>
      {menuItems.map((item, index) => (
        <ListItem
          button
          key={index}
          component={Link}
          href={item.href}
          onClick={toggleDrawer(false)}
          sx={{
            py: 1.5,
            borderLeft: isActive(item.href)
              ? '4px solid #00B5E2'
              : '4px solid transparent',
            backgroundColor: isActive(item.href)
              ? 'rgba(0, 181, 226, 0.1)'
              : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(0, 181, 226, 0.05)',
            },
          }}
        >
          <ListItemText
            primary={item.label}
            primaryTypographyProps={{
              fontWeight: isActive(item.href) ? 'bold' : 'normal',
              color: item.highlight ? '#00B5E2' : 'inherit',
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <HideOnScroll>
      <AppBar
        position='fixed'
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: scrolled ? 'white' : 'rgba(255, 255, 255, 0.95)',
          color: '#333',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar
            sx={{
              py: { xs: 1, lg: 1.5 },
              minHeight: { xs: 70, lg: 80 },
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {/* Logo */}
            <Box
              component={Link}
              href='/'
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src='/images/logo.png'
                alt='Mpumelelo Foundation Logo'
                style={{ width: 180 }}
              />
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 1,
              }}
            >
              {menuItems.map((item, index) =>
                item.highlight ? (
                  <Button
                    key={index}
                    component={Link}
                    href={item.href}
                    variant='contained'
                    sx={{
                      ml: 1,
                      backgroundColor: '#00B5E2',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#0088a9',
                      },
                      borderRadius: 0,
                      px: 3,
                      py: 1,
                      textTransform: 'none',
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button
                    key={index}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: isActive(item.href) ? '#00B5E2' : '#333',
                      fontWeight: isActive(item.href) ? 'bold' : 'normal',
                      position: 'relative',
                      textTransform: 'none',
                      mx: 0.5,
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: isActive(item.href) ? '100%' : '0%',
                        height: '2px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: '#00B5E2',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                        '&:after': {
                          width: '100%',
                        },
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )
              )}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color='inherit'
              edge='end'
              sx={{ display: { xs: 'block', md: 'none' } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Drawer */}
            <Drawer
              anchor='right'
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {renderMenu}
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

const NavBar = () => {
  return (
    <>
      <Header />
      <Box sx={{ height: { xs: 70, lg: 80 } }} />{' '}
      {/* Spacer for fixed header */}
    </>
  );
};

export default NavBar;
