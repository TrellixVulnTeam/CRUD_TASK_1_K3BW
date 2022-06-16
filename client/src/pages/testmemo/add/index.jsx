import React, { useState } from 'react';
import Show from '../show';


function Add(props) {
    const[count, Setcount] = useState(0);
    const tong = () => {
        const tongcong = count + 1;
        Setcount(tongcong);
    }
    return (
        <div>
            <Show />
            <h1>tong la : {count}</h1>
            <button onClick={() => {tong()}}>add</button>
        </div>
    );
}

export default Add;