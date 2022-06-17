import React, { memo } from 'react';


function Show({count2}) {
    console.log("test memo");
    const tich = 15;
    return (
        <div>
            <h1>tich la: {count2}</h1>
        </div>
    );
}

export default memo(Show);