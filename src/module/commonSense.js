import { start_loading, end_loading } from "./loading";
import sampleCommonSenseData from "../sample/CommonSense.json";

const SAMPLE_COMMONSENSE_LIST_SUCCESS = 'commonSense/SAMPLE_COMMONSENSE_LIST_SUCCESS'
const SAMPLE_COMMONSENSE_LIST_FAILED = 'commonSense/SAMPLE_COMMONSENSE_LIST_FAILED'

export const sample_commonsense_list = (category) => async dispatch => {
    dispatch(start_loading());
    try{
        dispatch({ type: SAMPLE_COMMONSENSE_LIST_SUCCESS, category });
    }catch(e){
        dispatch({ type: SAMPLE_COMMONSENSE_LIST_FAILED, payload: e });
        throw(e);
    }finally{
        dispatch(end_loading());
        return;
    }
}

const initialState = {
    commonSenseList: [],
    error: null
}

export const commonSense = (state=initialState, action) => {
    switch(action.type){
        case SAMPLE_COMMONSENSE_LIST_SUCCESS:
            const sample_commonSense_list_filter = sampleCommonSenseData.filter(data => data.category === action.category)
            return {
                ...state,
                commonSenseList: sample_commonSense_list_filter,
                error: null
            }
        case SAMPLE_COMMONSENSE_LIST_FAILED:
            return {
                ...state,
                commonSenseList: [],
                error: action.payload
            }
        default:
            return state;
    }
}