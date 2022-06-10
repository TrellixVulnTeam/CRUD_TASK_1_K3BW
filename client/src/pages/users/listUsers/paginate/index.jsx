import {React} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function Paginate(props) {
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