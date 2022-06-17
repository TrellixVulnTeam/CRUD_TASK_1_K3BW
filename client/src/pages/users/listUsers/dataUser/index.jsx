import {memo, React}  from 'react';
import axios from "axios";
import UserForm from '../../formUsers';
import {TableCell, TableRow, TableBody, Button, Dialog, DialogActions, DialogTitle} from '@mui/material';
import Paginate from '../paginate'
import {useDispatch, useSelector} from 'react-redux';
import actionsNhanVien from 'reducers/actions/nhavienAction';
import moment from 'moment';
import { useState } from 'react';



function DataUser({onClose, setload, pagelength}) {
    const userState = useSelector(state => state.nhanvien);
    const [openFormUser, setOpenFormUser] = useState(false)
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpenFormUser(false)
        // dispatch(actionsNhanVien.setOpen(false));
    };

    const deleteRow = async (id) => {
        if (window.confirm("Are you sure you want to delete?")){
            axios.delete('http://localhost:3001/delete/'+ id)
            .then((res) => {
                alert(res.data)
                setload();
            })
            .catch(err => console.log("aaaa"));
        }
    };

    const convertDate = (date) => {
        return moment(date).format('DD/MM/YYYY');
    }

    const updateRow = async (row) => {
        dispatch(actionsNhanVien.setOpen(true))
        dispatch(actionsNhanVien.setDataFormUpdate(row));
    };
    alert("aaa")
    return (
        <>
            <TableBody >
                {userState.data.map((row) => (
                    <TableRow  key={'0'} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                        <TableCell component="th" scope="row">{row.id}</TableCell>
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell align="right">{row.age}</TableCell>
                        <TableCell align="right">{row.sex}</TableCell>
                        <TableCell align="right">{convertDate(row.date)}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.address}</TableCell>
                        <TableCell align="right">
                            <Button style={{boxShadow: "none"}}  onClick={() => deleteRow(row.id)} >DELETE</Button>
                            <Button style={{boxShadow: "none"}} onClick={() => updateRow(row)} >UPDATE</Button>
                        </TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell colSpan={8}>
                        <Paginate style={{display:"flex", justifyContent: "center"}} setload = {setload} />
                    </TableCell>
                </TableRow>
            </TableBody>
            <>
                <Dialog
                    open={userState.open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Form Update Thong Tin Nhan Vien"}
                    </DialogTitle>
                    <UserForm onClose={handleClose} setload={setload}/>
                    <DialogActions>
                        <Button  onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </>
        </>
    );
}
export default memo(DataUser);






