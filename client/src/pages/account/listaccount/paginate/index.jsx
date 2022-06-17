import {React, useMemo, memo} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';


function Paginate(props) {
    const stateAccount = useSelector(state => state.account);
    const handleChange = (event, value) => {
        props.setload(value);
    };

    const RenderPagination = useMemo(() => (
        <div>
            <Stack spacing={2}>
                <Pagination  style={{display:"flex", justifyContent: "center"}}  count={stateAccount.pagelength}  color="primary"  onChange={handleChange} />
            </Stack>
        </div>
    ),[stateAccount.page,stateAccount.pagelength]);

    return (
        RenderPagination
    );
}

export default memo(Paginate);