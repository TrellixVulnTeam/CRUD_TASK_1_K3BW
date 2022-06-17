import React, { useState } from 'react';
import Show from '../show';


function Add(props) {
    const[count, Setcount] = useState(0);
    const[count2, Setcount2] = useState(0);
    const tong = () => {
        const tongcong = count + 1;
        Setcount(tongcong);
    }
    const tong2 = () => {
        const tongcong = count2 + 1;
        Setcount2(tongcong);
    }
    return (
        <div>
            <Show count2 = {count2}/>
            <h1>tong la : {count}</h1>
            <button onClick={() => {tong()}}>add</button>
            <button onClick={() => {tong2()}}>add2</button>
        </div>
    );
}

export default Add;