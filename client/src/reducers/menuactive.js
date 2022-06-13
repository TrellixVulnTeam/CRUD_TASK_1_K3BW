// import { createSlice } from "@reduxjs/toolkit";
// Khởi tạo state cho slice, có thể kèm giá trị mặc định ban đầu
const initialState = {
    activeselect :  '1',
    open : false,
    openlevel : '',
    openid : '',
    idlevel : '',
};


function menuacitve(state = initialState, action) {
    switch (action.type) {
        case 'GET_ACTIVESELECT':
            return {
                ...state,
                activeselect: action.payload 
        };
        case 'GET_IDLEVEL':
            return {
                ...state,
                idlevel: action.payload 
        };
        case 'GET_OPEN':
            return {
                ...state,
                open: action.payload 
        };
        case 'GET_OPENLEVEL':
            return {
                ...state,
                openlevel: action.payload 
        };
        case 'GET_OPENID':
            return {
                ...state,
                openid: action.payload 
        };
        default:
            return state;
    }
}

export default menuacitve;