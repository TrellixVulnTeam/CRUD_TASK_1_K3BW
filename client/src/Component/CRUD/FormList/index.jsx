import React, { useState, useEffect } from "react";
// import React, {useState} from "react";

import axios from "axios";

// import BtnAddForm from "./BtnAddForm";
import DataFormList from "./DataFormList";
import './style.css';

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

/**thu vien
 * buttom
 */

import Stack from '@mui/material/Stack';
// import { TableFooter } from "@mui/material";
// import { jsx } from "@emotion/react";


/**
 * function tra ve list table du lieu nhan vien
 * @returns 
 */
function FormList() {
    const [data, setData] = useState(null);
    useEffect(() => {
      axios.get('http://localhost:3001/listdata')
        .then((res) => {
          setData(res.data);
        })
        .catch(err => console.log(err));
    },[data]); ///////////////////////////////////////////////
    return (
        <TableContainer component={Paper}>

            <Stack spacing={2} direction="row">
            </Stack>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" border="5px solid #000">
                <TableHead>
                <h1>FORM LIST</h1>

                    <TableRow>
                        
                        <TableCell >ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Sex</TableCell>
                        <TableCell align="right">Date of birth</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>

                <DataFormList rows={data}/>

            </Table>
        </TableContainer>
    );
}
export default FormList;




  
  