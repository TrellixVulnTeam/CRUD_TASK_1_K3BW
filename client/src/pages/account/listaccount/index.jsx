import React, { useState, useEffect } from "react";
import axios from "axios";
import FormAccount from '../formaccount';
import './style.css';
import {Table, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions,DialogTitle} from '@mui/material';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DataList from './datalist';
import {useDispatch, useSelector} from 'react-redux';
// import accountredux from "../../../reducers/accountredux";
import accountAction from '../../../actions/accountAction'
import actionsNhanVien from "../../../actions/nhavienAction";

function ListAccount(){
    const stateAccount = useSelector(state => state.account);
    const dispatch = useDispatch();
    /**
     * function onLoad de thay doi gia tri khi submit button de bat su thay doi du lieu useEffect load du lieu rows
     */
    
    /**
     * 
     */
    const onLoad = (pages) =>{
        if(pages){
            dispatch(accountAction.setPage(pages));
        }
        if(stateAccount.timeout === true) dispatch(accountAction.setTimeOut(false));
        else dispatch(accountAction.setTimeOut(true));
        // console.log('pages: ' , {pages});
    }
    useEffect(() => {

        axios.get('http://localhost:3001/account/listaccount',{
            params: {
                pages: stateAccount.page
            }
        })
        .then((res) => {
            dispatch(accountAction.setData(res.data.datarow))
            dispatch(accountAction.setDataNV(res.data.dataNV))
            dispatch(accountAction.setDataPB(res.data.dataPB))
            dispatch(accountAction.setPageLoad(res.data.page))
        })
        .catch(err => console.log("aaaa"));
    },[stateAccount.timeout]);
    const [open, setOpen] = React.useState(false);
    console.log('timeout: ' , stateAccount.timeout);
    /**
     * dung de off form
     */
    const handleClose = () => {
        dispatch(accountAction.setOpen(false))
        // setOpen(false);
    };

    /**
     * dung de on form
     */
    const addform = () => {
        dispatch(accountAction.setOpen(true));
        // setOpen(true);
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
                <DataList onClose={handleClose} setload={onLoad} rows={stateAccount.data} pagelength = {stateAccount.pagelength}/>
            </Table>

            <>
                <Dialog
                    open={stateAccount.open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Form Add Thong Tin Nhan Vien"}
                    </DialogTitle>
                    <FormAccount onClose={handleClose} setload={onLoad}  data={stateAccount.data} dataNV = {stateAccount.dataNV} dataPB = {stateAccount.dataPB}/>

                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </>
        </TableContainer>
    );
}
export default ListAccount;