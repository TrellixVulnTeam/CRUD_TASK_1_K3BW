import React, { useState, useEffect } from "react";
import axios from "axios";
import FormUser from '../formUsers';
import './style.css';
import {Table, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions,DialogTitle} from '@mui/material';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DataUser from "./dataUser";

/**
 * function tra ve list table du lieu nhan vien
 * @returns 
 */
function ListUsers() {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:3001/listdata')
        .then((res) => {
            setData(res.data);
        })
        .catch(err => console.log("aaaa"));
    },[{data}]);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const addform = () => {
        setOpen(true);
        // setData(row);

    };

    return (
        <TableContainer component={Paper}>
            <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={addform}>ADD  <AddCircleIcon/> </Button>
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
                <DataUser rows={data}/>
            </Table>

            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                     <DialogTitle id="alert-dialog-title">
                        {"Form Add Thong Tin Nhan Vien"}
                    </DialogTitle>
                    <FormUser data={data}/>

                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </TableContainer>
    );
}
export default ListUsers;




  
  