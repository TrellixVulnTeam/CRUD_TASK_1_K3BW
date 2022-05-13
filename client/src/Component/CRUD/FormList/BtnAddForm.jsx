import React from 'react';
import axios from "axios";

//buttom
import Button from '@mui/material/Button';

//icon
import AddCircleIcon from '@mui/icons-material/AddCircle';

/**
 * button hident addForm nhan vien
 * @returns 
 */
function BtnAddForm22() {
    // const listdata = () =>{
    //     axios({
    //       method: 'GET',
    //       url: 'http://localhost:3001/listdata',
    //     })
    //     .then(function (response) {
    //         console.log(response) ;
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    //   }
    //   console.log({listdata});
    return (
        <div>
            <Button variant="contained">ADD  <AddCircleIcon/> </Button>
        </div>
    );
}

export default BtnAddForm22;