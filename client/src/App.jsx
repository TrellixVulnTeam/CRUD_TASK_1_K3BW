import './App.css';
import React, { useState, Suspense } from 'react';
import { Navigate, Router, Routes, Route } from 'react-router-dom'
import ListUsers from './pages/users/listUsers';
import Login from './pages/auth/login'
import Dashboard from './pages/dashboard';
import ForgotPassword from './pages/auth/forgotpassword'
import Account from './pages/account/listaccount';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider, createMuiTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from 'layouts/sidebar';
import Footer from 'components/footer';
import Header from 'layouts/header'
import SetKey from 'pages/auth/setkey';
import Loadding from './layouts/loadding'
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import QRCode from './pages/QRCode';
import Add from './pages/testmemo/add';


const LazyDashboard = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/dashboard')), 1000)
  })
});
const LazyListUsers = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/users/listUsers')), 1000)
  })
});
const LazyAccount = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/account/listaccount')), 1000)
  })
});

function App() {
  let navigate = useNavigate();
// const mdTheme = createTheme();
  const [token, setToken] = useState(localStorage.getItem('token'));
	const userState = useSelector(state => state.sibar);
  const muiTheme = createTheme(userState.theme);

  if(!token) {
    // console.log(window.location.pathname);
    if(window.location.pathname !== "/login" ){
      if(window.location.pathname !== "/forgotpassword" ){
        if(window.location.pathname !== "/setkey" ){
          window.location.href = '/login';
        }
      }
    }
    
    return (
      <Routes>
        <Route path='/login' element={<Login setToken = {setToken}/> } />
        <Route path='/forgotpassword' element={<ForgotPassword setToken = {setToken}/> } />
        <Route path='/setkey' element={<SetKey setToken = {setToken}/> } />
      </Routes>
    )
  }
  
  

  return (
    <ThemeProvider theme={muiTheme}>
      <Suspense fallback={<Loadding></Loadding>}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
       
        
        <Sidebar />
        
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
       
          <Toolbar color="backgroundColor"/>
          
              <Routes>
                <Route path='/' element={<LazyDashboard/>} />
                <Route path='/listusers' element={<LazyListUsers/>} />
                <Route path='/listaccount' element={<LazyAccount/> } />
                <Route path='/createqrcode' element={<QRCode/> } />
                <Route path='/test' element={<Add/> } />
              </Routes>
            <Footer sx={{ pt: 4 }} />
        </Box>
      </Box>
      </Suspense>
    </ThemeProvider>
    
  );
}

export default App;

