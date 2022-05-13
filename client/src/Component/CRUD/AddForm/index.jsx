import React, {useState} from "react";
import axios from "axios";
import './style.css';

import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


/**
 * form them du lieu
 * @returns 
 */
function AddForm() {
  const [name, setName] = useState("");
  const [age, SetAge] = useState("");
  const [sex, setSex] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const dataForm = {
    name: name,
    age: age,
    sex: sex,
    date: date,
    email: email,
    address: address,
  }
  const addDataForm = () =>{
    console.log({dataForm});
    axios({
      method: 'post',
      url: 'http://localhost:3001/create',
      data: dataForm
    })
    .then(function (response) {
       alert(response.send);
    })
    .catch(function (error) {
        console.log(error);
    });
  }
  
  return (
    <div className='container center' >
      <Grid className='container-gird' container spacing={2} xs={4}>
       <Grid className='item-Gird' item xs={412}>
              <div className='textFieldItem'>
                <h2>FORM ADD</h2>
              </div>
              <div className='textFieldItem'>
                <TextField 
                  fullWidth InputLabelProps={{ shrink: true, required: true }} 
                  label="Name" 
                  id="fullWidth" 
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className='textFieldItem'>
                <TextField 
                  fullWidth InputLabelProps={{ shrink: true, required: true }} 
                  type="number" 
                  label="Age" 
                  id="fullWidth" 
                  onChange={(event) => {
                    SetAge(event.target.value);
                  }}
                />
                
              </div>
              <div className='textFieldItem'>
                <Grid xs={12} spacing={2} container>
                  <Grid xs={2} item>
                    <InputLabel 
                    id="demo-simple-select-label" 
                    with="30%" 
                    onChange={(event) => {
                      setSex(event.target.value);
                    }}
                    >Sex</InputLabel>
                  </Grid>
                  <Grid xs={6} item>
                  <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Sex"
                    onChange={(event) => {
                      setSex(event.target.value);
                    }}
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                  </Grid>
                </Grid>
              </div>
              <div className='textFieldItem'>
                <TextField 
                  fullWidth type="date"  
                  InputLabelProps={{ shrink: true, required: true }}  
                  label="Date of birth" id="fullWidth" 
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                />
              </div>
              <div className='textFieldItem'>
                <TextField 
                  fullWidth type="email" 
                  InputLabelProps={{ shrink: true, required: true }} 
                  label="Email" 
                  id="fullWidth" 
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className='textFieldItem'>
                <TextField 
                  fullWidth label="Address" 
                  InputLabelProps={{ shrink: true, required: true }} 
                  id="fullWidth" 
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />
              </div>
              <div className='textFieldItem'>
                <Button onClick={addDataForm} variant="contained">Submit  <AddCircleIcon/> </Button>
              </div>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default AddForm;