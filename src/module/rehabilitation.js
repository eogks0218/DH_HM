import { start_loading, end_loading } from "./loading";
import sampleRehabilitationData from "../sample/Rehabilitation.json"

const SAMPLE_REHABILITATION_LIST_SUCCESS = 'rehabilitation/SAMPLE_REHABILITATION_LIST_SUCCESS'
const SAMPLE_REHABILITATION_LIST_FAILED = 'rehabilitation/SAMPLE_REHABILITATION_LIST_FAILED'

export const sample_rehabilitation_list = (subcategory) => async dispatch => {
    dispatch(start_loading());
    try{
        dispatch({ type: SAMPLE_REHABILITATION_LIST_SUCCESS, subcategory });
    }catch(e){
        dispatch({ type: SAMPLE_REHABILITATION_LIST_FAILED, payload: e });
        throw(e);
    }finally{
        dispatch(end_loading());
        return;
    }
}

const initialState = {
    rehabilitationList: [],
    error: null
}

export const rehabilitation = (state=initialState, action) => {
    switch(action.type){
        case SAMPLE_REHABILITATION_LIST_SUCCESS:
            return {
                rehabilitationList: sampleRehabilitationData.filter(rehabilitation => rehabilitation.subcategory === action.subcategory),
                error: null
            }
        case SAMPLE_REHABILITATION_LIST_FAILED:
            return {
                rehabilitationList: [],
                error: action.payload
            }
        default:
            return state;
    }
}