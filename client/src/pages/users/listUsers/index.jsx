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
    const [data, setData] = useState([]);
    const [timeout, setTimeOut] = useState(true);
    const [page , setPage] = useState(1);
    const [pagelength , setPageLength] = useState('')

    /**
     * function onLoad de thay doi gia tri khi submit button de bat su thay doi du lieu useEffect load du lieu rows
     */
    
    /**
     * 
     */
    const onLoad = (pages) =>{
        if(pages){
            setPage(pages);
        }
        if(timeout === true) setTimeOut(false);
        else setTimeOut(true);
        // console.log('pages: ' , {pages});
    }
    useEffect(() => {

        axios.get('http://localhost:3001/listdata/',{
            params: {
                pages: page
            }
        })
        .then((res) => {
            // console.log(res.data.datarow);
            setData(res.data.datarow);
            setPageLength(res.data.page)
        })
        .catch(err => console.log("aaaa"));
    },[timeout]);
    const [open, setOpen] = React.useState(false);
    
    /**
     * dung de off form
     */
    const handleClose = () => {
        setOpen(false);
    };

    /**
     * dung de on form
     */
    const addform = () => {
        setOpen(true);
    };
    return (
        <TableContainer component={Paper}>
            <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={addform}>ADD  <AddCircleIcon/> </Button>
            </Stack>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" border="5px solid #000">
                <TableHead>
                    <h2>FORM LIST</h2>
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
                <DataUser onClose={handleClose} setload={onLoad} rows={data} pagelength = {pagelength}/>
            </Table>

            <>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                     <DialogTitle id="alert-dialog-title">
                        {"Form Add Thong Tin Nhan Vien"}
                    </DialogTitle>
                    <FormUser onClose={handleClose} setload={onLoad}  data={data}/>

                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </>
        </TableContainer>
    );
}
export default ListUsers;




  
  