import { Link, useNavigate } from 'react-router-dom'
import React from 'react';
import {Avatar ,Button, CssBaseline, TextField, FormControlLabel, Checkbox, Box, Typography, Container, createTheme, ThemeProvider} from '@mui/material';
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
function SetKey(props){
  const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const dataform =({
        key: data.get('key'),
        newpassword: data.get('newpassword'),
        renewpassword: data.get('renewpassword'),
      });
      axios({
        method: 'post',
        url: 'http://localhost:3001/account/setkey',
        data: dataform
      })
      .then(function (res) {
        console.log(res)
          if(res.data){
            navigate("/login", { replace: true });
          }else{
            navigate("/setkey", { replace: true });
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
                enter key
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="key"
              label="key"
              name="key"
              autoComplete="key"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="newpassword"
              label="nhap mat khau moi"
              name="newpassword"
              autoComplete="current-password"
              autoFocus
              type="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="renewpassword"
              label="nhap lai mat khau moi"
              name="renewpassword"
              autoComplete="current-password"
              autoFocus
              type="password"
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

export default SetKey;