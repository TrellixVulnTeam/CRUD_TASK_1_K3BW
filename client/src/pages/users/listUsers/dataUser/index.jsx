import React , { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import UserForm from '../../formUsers';
import {TableCell, TableRow, TableBody, Button, Dialog, DialogActions, DialogTitle} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';



 DataUser.propTypes = {
    rows: PropTypes.array,
};

/**
 * component DataUser dung de load data rows
 * props.onClose dung de goi function onClose trong thang cha goi den no. 
 * props.setload dung de goi function onClose trong thang cha goi den no. 
 * props.rows truyen du lieu. 
 * @param {*} param0 
 * @returns 
 */
function DataUser({onClose, setload, rows}) {
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
            axios.delete('http://localhost:3001/delete/'+ id)
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
    
    if(!rows) return;
    return (
        <>
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.sex}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">
                        <button onClick={() => deleteRow(row.id)}><DeleteForeverIcon/></button> || <button onClick={() => updateRow(row)}><BorderColorIcon/></button>
                    </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Form Update Thong Tin Nhan Vien"}
                    </DialogTitle>
                    <UserForm onClose={handleClose} setload={setload} data={data}/>

                    <DialogActions>
                        <Button  onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}
export default DataUser;






