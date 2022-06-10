import {combineReducers} from "redux";
import accountredux from "./accountredux";
import nhanvienredux from "./nhanvienredux";
import slibarredux from "./sibarredux";

const rootReducers = combineReducers({
    nhanvien: nhanvienredux,
    account: accountredux,
    sibar: slibarredux,
})

export default rootReducers;