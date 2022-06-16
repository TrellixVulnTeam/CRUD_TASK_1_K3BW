import React, { useEffect } from "react";
import axios from "axios";
import FormAccount from '../formaccount';
import './style.css';
import {Table, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions,DialogTitle, Stack} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DataList from './datalist';
import {useDispatch, useSelector} from 'react-redux';
import accountAction from 'reducers/actions/accountAction'
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import { useMemo } from "react";

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
    /**
     * dung de off form
     */
    const handleClose = () => {
        dispatch(accountAction.setOpen(false))
    };

    /**
     * dung de on form
     */
    const addform = () => {
        dispatch(accountAction.setOpen(true));
    };
    const useStyles = makeStyles((theme) => ({
        root: {
          height: 180,
        },
        container: {
          display: 'flex',
        },
        paper: {
          margin: theme.spacing(1),
        },
        svg: {
          width: 100,
          height: 100,
        },
        polygon: {
          fill: theme.palette.common.white,
          stroke: theme.palette.divider,
          strokeWidth: 1,
        },
      }));
      const classes = useStyles();
    //   const DataTable = useMemo(() => {
    //     return <DataList onClose={handleClose} setload={onLoad} rows={stateAccount.data} pagelength = {stateAccount.pagelength}/>;
        
    // },[handleClose])
     
      
    return(
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
                <TableContainer style={{padding:"25px"}} component={Paper}>
                    <Stack style={{display:"flex", justifyContent: "right"}} spacing={2} direction="row">
                    <Button variant="contained" onClick={addform} style={{backgroundColor:'#1976d2'}}>ADD  <AddCircleIcon/> </Button>
                    </Stack>
                    <center><h1 style={{fontFamily: 'Lilly'}}>FORM LIST</h1></center>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
                        {/* {DataTable} */}
                        <DataList setload={onLoad} />
                    </Table>
                    <>
                        <Dialog
                            open={stateAccount.open}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Form Add Thong Tin Nhan Vien"}
                            </DialogTitle>
                            <FormAccount onClose={handleClose} setload={onLoad}/>

                            <DialogActions>
                                <Button onClick={handleClose}>Close</Button>
                            </DialogActions>
                        </Dialog>
                    </>
                </TableContainer>
            </Paper>
        </Zoom>
    );
}
export default ListAccount;