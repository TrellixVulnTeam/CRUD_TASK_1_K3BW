import {React}  from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import UserForm from '../../formUsers';
import {TableCell, TableRow, TableBody, Button, Dialog, DialogActions, DialogTitle} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Paginate from '../paginate'
import {useDispatch, useSelector} from 'react-redux';
import actionsNhanVien from 'reducers/actions/nhavienAction';
import moment from 'moment';

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
function DataUser({onClose, setload, rows, pagelength}) {
    const userState = useSelector(state => state.nhanvien);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(actionsNhanVien.setOpen(false));
    };
    /**
     * function deleteRow chuyen huong den URL API delete.
     * @param {*} id 
     */
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
                            {/* <button onClick={() => deleteRow(row.id)}><DeleteForeverIcon/></button> || <button onClick={() => updateRow(row)}><BorderColorIcon/></button> */}
                        </TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell colSpan={8}>
                        <Paginate style={{display:"flex", justifyContent: "center"}} setload = {setload} pagelength = {userState.pagelength}/>
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
                    <UserForm onClose={handleClose} setload={setload} data={userState.dataformupdate}/>

                    <DialogActions>
                        <Button  onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </>
        </>
    );
}
export default DataUser;






