import React, { useState, useEffect } from "react";
import axios from "axios";
import FormAccount from '../formaccount';
import './style.css';
import {Table, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions,DialogTitle} from '@mui/material';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DataList from './datalist';

function ListAccount(){
    const [data, setData] = useState([]);
    const [timeout, setTimeOut] = useState(true);
    const [page , setPage] = useState(1);
    const [pagelength , setPageLength] = useState('')
    const [dataNV, setDataNV] = useState('');
    const [dataPB, setDataPB] = useState('');

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

        axios.get('http://localhost:3001/account/listaccount',{
            params: {
                pages: page
            }
        })
        .then((res) => {
            setData(res.data.datarow);
            setDataNV(res.data.dataNV);
            setDataPB(res.data.dataPB);
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
    return(
        <TableContainer style={{padding:"25px"}} component={Paper}>
            <Stack style={{display:"flex", justifyContent: "right"}} spacing={2} direction="row">
            <Button variant="contained" onClick={addform}>ADD  <AddCircleIcon/> </Button>
            </Stack>
            <center><h2>FORM LIST</h2></center>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" border="5px solid #000">
                <TableHead>
                    
                    <TableRow>
                        <TableCell >ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Ten Phong Ban</TableCell>
                        <TableCell align="right">Token</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <DataList onClose={handleClose} setload={onLoad} rows={data} pagelength = {pagelength}/>
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
                    <FormAccount onClose={handleClose} setload={onLoad}  data={data} dataNV = {dataNV} dataPB = {dataPB}/>

                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </>
        </TableContainer>
    );
}
export default ListAccount;