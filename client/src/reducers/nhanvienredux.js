// import { createSlice } from "@reduxjs/toolkit";
// Khởi tạo state cho slice, có thể kèm giá trị mặc định ban đầu
const initialState = {
    data :  [],
    timeout: true,
    page: 1,
    pagelength: '',
    open: false,
    dataformupdate: [],

};



function nhanvienredux(state = initialState, action) {
    switch (action.type) {
        case 'GET_LIST':
            return {
                ...state,
                data: action.payload 
            };
        case 'SET_TIMEOUT':
            return {
                ...state,
                timeout: action.payload,
            }
        case 'SET_OPEN':
            return {
                ...state,
                open: action.payload,
            }
        case 'SET_DATA_FORM_UPDATE':
            return {
                ...state,
                dataformupdate: action.payload,

            }
        case 'SET_PAGELENGTH':
            return {
                ...state,
                pagelength: action.payload,

            }
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload,

            }
        default:
            return state;
    }
}

export default nhanvienredux;