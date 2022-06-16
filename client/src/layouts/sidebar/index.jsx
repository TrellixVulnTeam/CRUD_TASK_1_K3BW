import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {List, Divider, Menu, MenuItem, Badge, IconButton, Typography, Toolbar} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '../../pages/dashboard/listItems';
import {useNavigate} from 'react-router-dom';
import Darklight from './darklight';
import {createMuiTheme } from '@mui/material/styles';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate("/login", { replace: true });
    window.location.reload(); 
  }

  //menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [toggleDark, settoggleDark] = useState(false);
  const mdTheme = createMuiTheme({
    palette: {
      type: toggleDark ? "dark" : "light",
    },
  });



  



  return (
        <>
          <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              backgroundColor: '#1976d2',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
              style={{boxShadow:"none"}}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
              <Darklight/>
            <h5>Hello:{localStorage.getItem('email')}</h5>
            <IconButton color="inherit" onClick={handleClick} style={{boxShadow:"none"}}> 
    
              <Badge color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton >
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openmenu}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>

          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton style={{boxShadow:"none"}} onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItem/>
            {/* {mainListItems} */}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        </>
        
  );
}

export default Sidebar;