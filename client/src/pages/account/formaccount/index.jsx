import React, {useState} from "react";
import axios from "axios";
import './style.css';
import { Button,TextField,InputLabel,Box,FormControl,NativeSelect } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function FormAccount({onClose, setload, data, dataNV, dataPB }){
    const [idNV, setIDNV] = useState(data.idNV);
  const [idPB, setIDPB] = useState(data.idPB);
  const dataForm = {
    idNV: idNV,
    idPB: idPB,
  }

  /**
   * formusers de goi api cua create va update, neu form co id sex run URL APi update, nguoc lai thi sex run URL API create.
   */
  const formusers = () =>{
        console.log(dataForm);
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
    // if(data.id){
    //   axios({
    //     method: 'post',
    //     url: 'http://localhost:3001/update',
    //     data: dataForm
    //   })
    //   .then(function (res) {
    //     alert(res.data);
    //     setload();
    //     onClose();
    //   })
    //   .catch(function (error) {
    //     onClose();
    //   });
    // }else{
    //   axios({
    //     method: 'post',
    //     url: 'http://localhost:3001/create',
    //     data: dataForm
    //   })
    //   .then(function (res) {
    //     alert(res.data);
    //     onClose();
    //     setload();
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     onClose();
    //   });
    // }
      
  };
  
  if(!data) return;
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
                          console.log(event.target.value);
                        setIDNV(event.target.value);
                      }}
                    >
                        <option value= ""></option>
                        {dataNV.map((optionNV) => (
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
                          console.log(event.target.value);
                          setIDPB(event.target.value);
                      }}
                    >
                        <option value = ""></option>
                        {dataPB.map((optionPB) => (
                            <option value = {optionPB.id}>{optionPB.id} - {optionPB.tenphongban}</option>
                        ))}
                    </NativeSelect>
                  </FormControl>
                </Box>
             </div>
              <div className='textFieldItem'>
                <Button onClick={formusers} variant="contained">Submit <AddCircleIcon/> </Button>
              </div>
          </form>
        </div>
      </div>

    );
}

export default FormAccount;