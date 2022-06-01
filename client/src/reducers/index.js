import {combineReducers} from "redux";
import accountredux from "./accountredux";
import nhanvienredux from "./nhanvienredux";

const rootReducers = combineReducers({
    nhanvien: nhanvienredux,
    account: accountredux,
})

export default rootReducers;