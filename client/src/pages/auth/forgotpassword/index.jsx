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
        DUC AST FPTTELECOM
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
function ForgotPassword(props){
  const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const dataform =({
        email: data.get('email'),
      });
      axios({
        method: 'post',
        url: 'http://localhost:3001/account/forgotpassword',
        data: dataform
      })
      .then(function (res) {
          if(res.data){
              console.log(res.data);
            navigate("/setkey", { replace: true });
          }else{
            navigate("/login", { replace: true });
          }
      })
      .catch(function (error) {
        console.log("false");
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
            Forgot Password
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Submit
            </Button>
          </Box>
        </Box>
        <Header sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    
  )
}

export default ForgotPassword;