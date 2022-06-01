import {React, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ListUser from '..';
import { getScopedCssBaselineUtilityClass } from '@mui/material';


function Paginate(props) {
    console.log('lang' ,props.pagelength);
    const handleChange = (event, value) => {
        props.setload(value);
    };
    
    return (
        <div>
            <Stack spacing={2}>
            <Pagination style={{display:"flex", justifyContent: "center"}} count={props.pagelength}  color="primary"  onChange={handleChange} />
            </Stack>
        </div>
    );
}

export default Paginate;