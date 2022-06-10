// import { createSlice } from "@reduxjs/toolkit";
// Khởi tạo state cho slice, có thể kèm giá trị mặc định ban đầu
const initialState = {
    activeselect :  '1',
};



function menuacitve(state = initialState, action) {
    switch (action.type) {
        case 'GET_ACTIVESELECT':
            return {
                ...state,
                activeselect: action.payload 
            };
        default:
            return state;
    }
}

export default menuacitve;