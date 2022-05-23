import React, {useState} from "react";
import axios from "axios";
import './style.css';
import { Button,TextField,InputLabel,Box,FormControl,NativeSelect } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

/**
 * component UserForm dung de goi form update vaf create.
 * @param {*} param0 
 * @returns 
 */
function UserForm({onClose, setload, data }) {
  const [id, setID] = useState(data.id);
  const [name, setName] = useState(data.name);
  const [age, setAge] = useState(data.age);
  const [sex, setSex] = useState(data.sex);
  const [date, setDate] = useState(data.date);
  const [email, setEmail] = useState(data.email); 
  const [address, setAddress] = useState(data.address);
  const dataForm = {
    id: id,
    name: name,
    age: age,
    sex: sex,
    date: date,
    email: email,
    address: address,
  }
  //kiem tra sex cos ton tai khong. neu khong gan gia trij mat dinh cho no la Male
  if(!dataForm.sex){setSex("Male")};

  /**
   * formusers de goi api cua create va update, neu form co id sex run URL APi update, nguoc lai thi sex run URL API create.
   */
  const formusers = () =>{
    if(data.id){
      axios({
        method: 'post',
        url: 'http://localhost:3001/update',
        data: dataForm
      })
      .then(function (res) {
        alert(res.data);
        setload();
        onClose();
      })
      .catch(function (error) {
        onClose();
      });
    }else{
      axios({
        method: 'post',
        url: 'http://localhost:3001/create',
        data: dataForm
      })
      .then(function (res) {
        alert(res.data);
        // onClose();
        setload();
      })
      .catch(function (error) {
        alert("bbbbb");
        console.log(error);
        onClose();
      });
    }
      
  };
  
  if(!data) return;

  return (
    <div>
      <div className='container center' >
        <form action="/" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); this.handleClose(); } }>
            <div className='textFieldItem'>
              <TextField 
                fullWidth InputLabelProps={{ shrink: true, required: true }} 
                label="Name" 
                id="fullWidth" 
                defaultValue={data.name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className='textFieldItem'>
              <TextField 
                fullWidth InputLabelProps={{ shrink: true, required: true }} 
                label="Age" 
                id="fullWidth" 
                defaultValue={data.age}
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
            </div>
            <div className='textFieldItem'>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Sex
                  </InputLabel>
                  <NativeSelect
                    inputProps={{
                      name: 'Sex',
                      id: 'uncontrolled-native',
                    }}
                    onChange={(event) => {
                      setSex(event.target.value);
                    }}
                  >
                    <option defaultValue={(!data.sex)?("Male"):((data.sex)==="Male"?("Male"):("Female"))}>{(!data.sex)?("Male"):((data.sex)==="Male"?("Male"):("Female"))}</option>
                    <option defaultValue={(!data.sex)?("Female"):((data.sex)!=="Female"?("Female"):("Male"))}>{(!data.sex)?("Female"):((data.sex)!=="Female"?("Female"):("Male"))}</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </div>
            <div className='textFieldItem'>
              <TextField 
                fullWidth InputLabelProps={{ shrink: true, required: true }} 
                label="Date" 
                id="fullWidth" 
                type="date"
                onChange={(event) => {
                  setDate(event.target.value);
                }}
              />
            </div>
            <div className='textFieldItem'>
              <TextField 
                fullWidth InputLabelProps={{ shrink: true, required: true }} 
                label="Email" 
                id="fullWidth" 
                defaultValue={data.email}

                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className='textFieldItem'>
              <TextField 
                fullWidth InputLabelProps={{ shrink: true, required: true }} 
                label="Address" 
                id="fullWidth" 
                defaultValue={data.address}

                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
            </div>
            <div className='textFieldItem'>
              <Button onClick={formusers} variant="contained">Submit <AddCircleIcon/> </Button>
            </div>
        </form>
      </div>
    </div>
  );
}
export default UserForm;
