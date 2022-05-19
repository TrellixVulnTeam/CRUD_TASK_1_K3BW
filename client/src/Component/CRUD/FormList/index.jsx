import React, { useState, useEffect } from "react";
import axios from "axios";
import DataFormList from "./DataFormList";
import './style.css';
import {Table, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import Stack from '@mui/material/Stack';

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
        .catch(err => console.log("aaaa"));
    },[{data}]); ///////////////////////////////////////////////

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




  
  