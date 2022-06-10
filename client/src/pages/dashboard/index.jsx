import * as React from 'react';

import MuiAppBar from '@mui/material/AppBar';
import Chart from 'pages_dashboard/Chart';
import Deposits from 'pages_dashboard/Deposits';
import Orders from 'pages_dashboard/Orders';
import { styled, Grid, Paper, Container } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
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
const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));
function Dashboard() {
  const classes = useStyles();
  return (
        <>
        
        <Container maxWidth="lg" sx={{ mt: 12, mb: 12 }}>
          <Zoom in={true} container spacing={3}  item xs={12} md={8} lg={9}>
            <Paper 
            elevation={4} 
            className={classes.paper}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
              }}
            >
              
                    <Deposits />
                  </Paper>
              
          </Zoom>
          
            <Grid container spacing={3}>
            
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Zoom in={true} container spacing={3}  item xs={12} md={8} lg={9}>
                    <Paper 
                    elevation={4} 
                    className={classes.paper}
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                      }}
                    >
                      
                            <Deposits />
                          </Paper>
                      
                  </Zoom>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Zoom in={true} container spacing={3}  item xs={12} md={8} lg={9}>
                    <Paper 
                    elevation={4} 
                    className={classes.paper}
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                      }}
                    >
                      
                            <Deposits />
                          </Paper>
                      
                  </Zoom>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                  <Zoom in={true} container spacing={3}  item xs={12} md={8} lg={9}>
                    <Paper 
                    elevation={4} 
                    className={classes.paper}
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 320,
                      }}
                    >
                      
                      <Orders />
                    </Paper>
                  </Zoom>
                </Grid>
            </Grid>
        </Container>
        </>
  );
}

export default Dashboard;