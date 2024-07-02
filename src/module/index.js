import { combineReducers } from "redux";
import { loading } from "./loading";
import { commonSense } from "./commonSense";
import { taping } from "./taping";
import { massage } from "./massage";
import { rehabilitation } from "./rehabilitation";

const rootReducer = combineReducers({
    loading,
    commonSense,
    taping,
    massage,
    rehabilitation
});

export default rootReducer;