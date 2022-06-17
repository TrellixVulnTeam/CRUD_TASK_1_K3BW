import {React, memo} from 'react';
import axios from "axios";
import {TableCell, TableRow, TableBody, Button} from '@mui/material';
import Paginate from '../paginate'
import {useDispatch, useSelector} from 'react-redux';
import accountAction from 'reducers/actions/accountAction';

function DataList(props){
    const stateaccount = useSelector(state => state.account);
    const dispatch = useDispatch();
    const loaddatalist = (pages) =>{
        if(pages){
            dispatch(accountAction.setPage(pages));
        }
        (stateaccount.timeout === true ) ? dispatch(accountAction.setTimeOut(false)) : dispatch(accountAction.setTimeOut(true));
    }

    const deleteRow = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            axios.delete('http://localhost:3001/account/delete/'+ id)
            .then((res) => {
                loaddatalist();
            })
            .catch(err => console.log("aaaa"));
          }
    };
    return(
        <>
            <TableBody  >
                {stateaccount.data.map((row) => (
                    <TableRow key={'0'} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                        <TableCell component="th" scope="row">{row.id}</TableCell>
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.tenphongban}</TableCell>
                        <TableCell align="right">{row.token}</TableCell>
                        <TableCell align="right">
                            <Button style={{boxShadow: "none"}}  onClick={() => deleteRow(row.id)} >DELETE</Button>
                        </TableCell>
                    </TableRow>
                ))}
                <TableRow>
                     <TableCell colSpan={8}>
                         <Paginate  justify = "center" setload = {loaddatalist} />
                     </TableCell>
                 </TableRow>
            </TableBody>
        </>
    );
}
export default memo(DataList);