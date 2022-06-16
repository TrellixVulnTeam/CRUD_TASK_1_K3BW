import {React, memo} from 'react';
import axios from "axios";
import FormAccount from '../../formaccount';
import {TableCell, TableRow, TableBody, Button, Dialog, DialogActions, DialogTitle, IconButton, Stack} from '@mui/material';
import {DeleteForever, BorderColor} from '@mui/icons-material';
import Paginate from '../paginate'
import {useDispatch, useSelector} from 'react-redux';
import accountAction from 'reducers/actions/accountAction';


function DataList({setload}){
    const stateaccount = useSelector(state => state.account);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(accountAction.setOpen(false));
    };
    /**
     * function deleteRow chuyen huong den URL API delete.
     * @param {*} id 
     */
    const deleteRow = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            axios.delete('http://localhost:3001/account/delete/'+ id)
            .then((res) => {
                setload();
            })
            .catch(err => console.log("aaaa"));
          }
    };

    const updateRow = async (row) => {
        dispatch(accountAction.setOpen(true));
        dispatch(accountAction.setDataFormUpdate(row));
    };
    return(
        <>
            <TableBody  >
                {stateaccount.data.map((row) => (
                    <TableRow key={'0'} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                        {/* {console.log(row)} */}
                        
                        <TableCell component="th" scope="row">{row.id}</TableCell>
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.tenphongban}</TableCell>
                        <TableCell align="right">{row.token}</TableCell>
                        <TableCell align="right">

                            <Button style={{boxShadow: "none"}}  onClick={() => deleteRow(row.id)} >DELETE</Button>
                            <Button style={{boxShadow: "none"}} onClick={() => updateRow(row)} >UPDATE</Button>
                        </TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell colSpan={8}>
                        <Paginate  justify = "center" setload = {setload} pagelength = {stateaccount.pagelength}/>
                    </TableCell>
                </TableRow>
               
            </TableBody>
            <>
                <Dialog
                    open={stateaccount.open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Form Update Thong Tin Nhan Vien"}
                    </DialogTitle>
                    <FormAccount onClose={handleClose} setload={setload} data={stateaccount.dataformupdate}/>

                    <DialogActions>
                        <Button  onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </>
        </>
    );
}
export default memo(DataList);