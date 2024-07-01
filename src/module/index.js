import { combineReducers } from "redux";
import { loading } from "./loading";
import { commonSense } from "./commonSense";
import { taping } from "./taping";
import { massage } from "./massage";

const rootReducer = combineReducers({
    loading,
    commonSense,
    taping,
    massage
});

export default rootReducer;