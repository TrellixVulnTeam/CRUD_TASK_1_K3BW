import './App.css';
import React, { useState } from 'react';
import {  BrowserRouter , Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import ListUsers from './pages/users/listUsers';
import Login from './pages/login/'
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from '../src/components/sidebar';
import Footer from '../src/components/footer';

const mdTheme = createTheme();

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  if(!token) {
    return <Login setToken = {setToken}/>
  }
  console.log(token);
  

  return (
    <ThemeProvider theme={mdTheme}>
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
          <Toolbar />
          
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/listusers' element={<ListUsers/>} />
                <Route path='/Login' element={<Login/> } />
              </Routes>
            </BrowserRouter>
            

            <Footer sx={{ pt: 4 }} />
        </Box>
      </Box>
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