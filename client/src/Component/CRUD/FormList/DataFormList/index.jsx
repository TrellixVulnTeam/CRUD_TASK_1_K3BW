import React , { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

/**thu vien
 * table
 */
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';


/**thu vien
 * icon
 */
 import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
 import BorderColorIcon from '@mui/icons-material/BorderColor';
// import UpdateForm from '../../UpdateForm';
DataFormList.propTypes = {
    rows: PropTypes.array,
};

/**
 * du lieu tung row table
 * @param {*} param0 
 * @returns 
 */
function DataFormList({rows}) {
    const deleteRow = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            axios.delete('http://localhost:3001/deleterow/'+ id)
                .then(() => this.setState({ status: 'Delete successful' }));
          }
    };
    const [data, setData] = useState(null);
    const updateRow = async (row) => {
        setData(row);
        
    };
    if(!rows) return;
    return (
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
    );
}
export default DataFormList;
