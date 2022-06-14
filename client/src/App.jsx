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
              </Routes>
            <Footer sx={{ pt: 4 }} />
        </Box>
      </Box>
      </Suspense>
    </ThemeProvider>
    
  );
}

export default App;


// import './App.css';
// import React, { useState } from 'react';
// import { Link, BrowserRouter , Routes, Router, Route, Switch } from 'react-router-dom'
// import ReactDOM, { render } from "react-dom";
// import Dashboard from './pages/dashboard';
// // import Dashboard from './pages/dashboard';
// import ListUsers from './pages/users/listUsers';
// import Login from './pages/login/'
// import Header from './components/header';

// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// function App() {
//   const [token, setToken] = useState(localStorage.getItem('token'));

//   // const successLogin = (props) =>{
//   //   setEmail(props.email);
//   //   setPassword(props.password);
//   //   setToken(props.token);
//   // }
//   if(!token) {
//     return <Login setToken = {setToken}/>
//   }
//   console.log(token);
//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

//   return (
//     <BrowserRouter>
//       <Box sx={{ flexGrow: 1 }}>
//         <Dashboard />
//         <Grid container spacing={2}>
//           {/* header */}
//           <Grid item xs={12}>
//             <Item>
//               <Header />
//             </Item>
//           </Grid>
//           {/* menubar */}
//           <Grid item xs={2}>
//             <Item>xs=4</Item>
//           </Grid>
//           {/* content */}
//           <Grid item xs={10}>
//             <Item>
//             <Routes>
//               <Route path='/' element={<ListUsers />} />
//               <Route path='/dashboard' element={<Dashboard />} />
//               <Route path='/Login' element={<Login/> } />
//             </Routes>
//             </Item>
//           </Grid>
//           {/* footer */}
//           <Grid item xs={12}>
//             <Item>footer</Item>
//           </Grid>
//         </Grid>
//       </Box>
//       <div className="App">
//         <ul>
//           <li>
//             <Link to='/dashboard'>Dashboard</Link>
//           </li>
//           <li>
//             <Link to='/Login'>Login</Link>
//           </li>
//         </ul>
//       </div>

      
//   </BrowserRouter>
   
    
//   );
// }

// export default App;
// render(<App />, document.getElementById("root"));




















// import './App.css';
// import React, { useState } from 'react';
// import { Link, BrowserRouter , Routes, Router, Route, Switch } from 'react-router-dom'
// import ReactDOM, { render } from "react-dom";
// import Dashboard from './pages/dashboard';
// import ListUsers from './pages/users/listUsers';
// import Login from './pages/login/'
// import Header from './components/header';

// function App() {
//   const [token, setToken] = useState(localStorage.getItem('token'));

//   // const successLogin = (props) =>{
//   //   setEmail(props.email);
//   //   setPassword(props.password);
//   //   setToken(props.token);
//   // }
//   if(!token) {
//     return <Login setToken = {setToken}/>
//   }
//   console.log(token);

//   return (
//     <BrowserRouter>

//       <div className="App">
//         <ul>
//           <li>
//             <Link to='/dashboard'>Dashboard</Link>
//           </li>
//           <li>
//             <Link to='/Login'>Login</Link>
//           </li>
//         </ul>
//       </div>
//     <Header />

//       <Routes>
//         <Route path='/' element={<ListUsers />} />
//         <Route path='/dashboard' element={<ListUsers />} />
//         <Route path='/Login' element={<Login/> } />
//       </Routes>
//   </BrowserRouter>
   
    
//   );
// }

// export default App;
// render(<App />, document.getElementById("root"));