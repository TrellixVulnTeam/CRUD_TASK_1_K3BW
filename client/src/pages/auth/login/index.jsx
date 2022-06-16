import { Link, useNavigate } from 'react-router-dom'
import React from 'react';
import {Avatar ,Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container, createTheme, ThemeProvider} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";

function Header(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="https://mui.com/">
        Duc AST FPTTELECOM
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
function Login(props){
  const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const dataform =({
        email: data.get('email'),
        password: data.get('password'),
      });
      axios({
        method: 'post',
        url: 'http://localhost:3001/account/login',
        data: dataform
      })
      .then(function (res) {
        props.setToken(res.data[0].token);
        localStorage.setItem('token',res.data[0].token);
        localStorage.setItem('email',res.data[0].email);
        navigate("/", { replace: true });
      })
      .catch(function (error) {
      });
      
    }
  return (

    
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/forgotpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              {/* <Grid item>
                <Link to="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        <Header sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    
  )
}

export default Login;