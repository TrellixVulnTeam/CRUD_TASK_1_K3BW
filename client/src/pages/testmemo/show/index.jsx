import React, { memo } from 'react';


function Show() {
    console.log("test memo");
    const tich = 15;
    return (
        <div>
            <h1>tich la: {tich}</h1>
        </div>
    );
}

export default memo(Show);