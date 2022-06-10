// import { createSlice } from "@reduxjs/toolkit";
// Khởi tạo state cho slice, có thể kèm giá trị mặc định ban đầu
const initialState = {
    theme :  {
        palette: {
          mode: 'light',
        },
      }
};



function slibarredux(state = initialState, action) {
    switch (action.type) {
        case 'GET_DRAK':
            return {
                ...state,
                theme: action.payload 
            };
        default:
            return state;
    }
}

export default slibarredux;