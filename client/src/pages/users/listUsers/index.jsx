import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import FormUser from '../formUsers';
import './style.css';
import {Table, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions,DialogTitle} from '@mui/material';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DataUser from "./dataUser";
import {useSelector, useDispatch} from 'react-redux'
import actionsNhanVien from "reducers/actions/nhavienAction";
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';

function ListUsers() {
    const userState = useSelector(state => state.nhanvien);

    const dispatch = useDispatch();

    const onLoad = 
        (pages) =>{
            if(pages) dispatch(actionsNhanVien.setPage(pages));
            userState.timeout === true ? dispatch(actionsNhanVien.setTimeout(false)) : dispatch(actionsNhanVien.setTimeout(true));
        }
    useEffect(() => {
        axios.get('http://localhost:3001/listdata/',{
            params: {
                pages: userState.page
            }
        })
        .then((res) => {
           dispatch(actionsNhanVien.setPageLength(res.data.page));
           dispatch(actionsNhanVien.getList(res.data.datarow));
        })
        .catch(err => console.log("aaaa"));
    },[userState.timeout]);

    const handleClose = 
        () => {
            dispatch(actionsNhanVien.setDataFormUpdate(''));
            dispatch(actionsNhanVien.setOpen(false));
        }
    const addform = () => {
        dispatch(actionsNhanVien.setOpen(true));
    };

    const useStyles = makeStyles((theme) => ({
        root: {height: 180},
        container: {display: 'flex'},
        paper: {margin: theme.spacing(1)},
        svg: {width: 100, height: 100},
        polygon: {fill: theme.palette.common.white, stroke: theme.palette.divider, strokeWidth: 1},
    }));

    const classes = useStyles();
      
    return (
        <Zoom in={true} container spacing={3}  item xs={12} md={8} lg={9}>
            <Paper 
            elevation={4} 
            className={classes.paper}
            sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            }}
            >
                <TableContainer style={{padding:"25px"}}  component={Paper}>
                    <Stack style={{display:"flex", justifyContent: "right"}} spacing={2} direction="row">
                    <Button  variant="contained" onClick={addform}>ADD  <AddCircleIcon/> </Button>
                    </Stack>
                    <center><h1 style={{fontFamily: 'Lilly'}}>FORM-LIST</h1></center>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
                        <TableHead>
                            <TableRow>
                                <TableCell >ID</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Age</TableCell>
                                <TableCell align="right">Sex</TableCell>
                                <TableCell align="right">Date-of-birth</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Address</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <DataUser onClose={handleClose} setload={onLoad} rows={userState.data} pagelength = {userState.pagelength}/>
                    </Table>
                    <Dialog
                        open={userState.open}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Form Add Thong Tin Nhan Vien"}
                        </DialogTitle>
                        <FormUser onClose={handleClose} setload={onLoad}  data={userState.data}/>

                        <DialogActions>
                            <Button onClick={handleClose}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </TableContainer>
            </Paper>
        </Zoom>
    );
}
export default ListUsers;




  
  