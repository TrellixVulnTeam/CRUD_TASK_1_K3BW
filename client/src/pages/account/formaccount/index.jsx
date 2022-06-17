import React, {memo, useState} from "react";
import axios from "axios";
import './style.css';
import { Button,InputLabel,Box,FormControl,NativeSelect } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useSelector} from 'react-redux';

function FormAccount({onClose, setload}){
  const stateaccount = useSelector(state => state.account);
  const data = stateaccount.dataformupdate;
  const [idNV, setIDNV] = useState(data.idNV);
  const [idPB, setIDPB] = useState(data.idPB);
  const dataForm = {
    idNV: idNV,
    idPB: idPB,
  }

  const formusers = () =>{
    if(dataForm.idNV && dataForm.idPB){
        axios({
            method: 'post',
            url: 'http://localhost:3001/account/create',
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
    }else console.log("false");
  };
  
    return(
        <div>
        <div className='container center' >
          <form action="/" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); this.handleClose(); } }>
              <div className='textFieldItem'>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                      Nhan Vien
                    </InputLabel>
                    <NativeSelect
                      inputProps={{
                        name: 'nhanvien',
                        id: 'uncontrolled-native',
                      }}
                      onChange={(event) => {
                        setIDNV(event.target.value);
                      }}
                    >
                        <option value= ""></option>
                        {stateaccount.dataNV.map((optionNV) => (
                            <option value = {optionNV.id}>{optionNV.id} - {optionNV.name}</option>
                        ))}
                    </NativeSelect>
                  </FormControl>
                </Box>
              </div>
              <div className='textFieldItem'>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                      Phong Ban
                    </InputLabel>
                    <NativeSelect
                      inputProps={{
                        name: 'phongban',
                        id: 'uncontrolled-native',
                      }}
                      onChange={(event) => {
                          setIDPB(event.target.value);
                      }}
                    >
                        <option value = ""></option>
                        {stateaccount.dataPB.map((optionPB) => (
                            <option value = {optionPB.id}>{optionPB.id} - {optionPB.tenphongban}</option>
                        ))}
                    </NativeSelect>
                  </FormControl>
                </Box>
             </div>
              <div className='textFieldItem'>
                <Button onClick={formusers} variant="contained">Submit<AddCircleIcon/> </Button>
              </div>
          </form>
        </div>
      </div>

    );
}

export default FormAccount;