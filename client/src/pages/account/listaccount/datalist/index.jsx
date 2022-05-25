import React , { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import FormAccount from '../../formaccount';
import {TableCell, TableRow, TableBody, Button, Dialog, DialogActions, DialogTitle, TableFooter} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Paginate from '../paginate'


DataList.propTypes = {
    rows: PropTypes.array,
};

function DataList({onClose, setload, rows, pagelength}){
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
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
    const [data, setData] = useState(null);
    const updateRow = async (row) => {
        setOpen(true);
        setData(row);
    };
    console.log(rows);
    const rowsdata = rows;
    return(
        <>
            <TableBody  >
                {rows.map((row) => (
                    <TableRow key={'0'} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                        {console.log(row)}
                        
                        <TableCell component="th" scope="row">{row.id}</TableCell>
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.tenphongban}</TableCell>
                        <TableCell align="right">{row.token}</TableCell>
                        <TableCell align="right">
                            <button onClick={() => deleteRow(row.id)}><DeleteForeverIcon/></button> || <button onClick={() => updateRow(row)}><BorderColorIcon/></button>
                        </TableCell>
                    </TableRow>
                ))}
                
                <TableFooter justify = "center" > <Paginate justify = "center" setload = {setload} pagelength = {pagelength}/></TableFooter>
               
            </TableBody>
            <>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Form Update Thong Tin Nhan Vien"}
                    </DialogTitle>
                    <FormAccount onClose={handleClose} setload={setload} data={data}/>

                    <DialogActions>
                        <Button  onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </>
        </>
    );
}
export default DataList;