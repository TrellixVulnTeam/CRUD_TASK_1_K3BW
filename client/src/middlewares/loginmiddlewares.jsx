import React from 'react';
import {Navigate} from 'react-router-dom';

function Loginmiddlewares({componetcon,props}) {
    if(!props.token){
        return <Navigate to="/login"></Navigate>
    }else{
        return <componetcon/>
    }
    // const MidLogin = () =>{
    //     if(!props.token){
    //         return true;
    //     }
    // }
    // console.log("aaaa");
    // return(
    //     <>
    //     </>
    // );

}

export default Loginmiddlewares;