import {React, useMemo, memo} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

function Paginate(props) {
    const stateuser = useSelector(state => state.nhanvien);
    const handleChange = (event, value) => {
        props.setload(value);
    };
    const RenderPagination = useMemo(() => (
        <div>
            <Stack spacing={2}>
                <Pagination style={{display:"flex", justifyContent: "center"}} count={stateuser.pagelength}  color="primary"  onChange={handleChange} />
            </Stack>
        </div>
    ),[stateuser.page,stateuser.pagelength]);
    return (
        RenderPagination
    );
}

export default memo(Paginate);