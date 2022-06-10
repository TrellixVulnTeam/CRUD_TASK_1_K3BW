import {combineReducers} from "redux";
import accountredux from "./accountredux";
import menuacitve from "./menuactive";
import nhanvienredux from "./nhanvienredux";
import slibarredux from "./sibarredux";

const rootReducers = combineReducers({
    nhanvien: nhanvienredux,
    account: accountredux,
    sibar: slibarredux,
    menu: menuacitve,
})

export default rootReducers;