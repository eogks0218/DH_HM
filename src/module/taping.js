import { start_loading, end_loading } from "./loading";
import sampleTapingdata from "../sample/Taping.json";

const SAMPLE_TAPING_LIST_SUCCESS = 'taping/SAMPLE_TAPING_LIST_SUCCESS'
const SAMPLE_TAPING_LIST_FAILED = 'taping/SAMPLE_TAPING_LIST_FAILED'

export const sample_taping_list = (category) => async dispatch => {
    dispatch(start_loading());
    try{
        dispatch({ type: SAMPLE_TAPING_LIST_SUCCESS, category });
    }catch(e){
        dispatch({ type: SAMPLE_TAPING_LIST_FAILED, payload: e });
        throw(e);
    }finally{
        dispatch(end_loading());
        return;
    }
}

const initialState = {
    tapingList : [],
    error: null
}

export const taping = (state=initialState, action) => {
    switch(action.type){
        case SAMPLE_TAPING_LIST_SUCCESS:
            if(action.category !== "all"){
                const sample_taping_list_filter = sampleTapingdata.filter(data => data.category === action.category)
                return {
                    tapingList: sample_taping_list_filter,
                    error: null
                }
            }else{
                return{
                    tapingList: sampleTapingdata,
                    error: null
                }
            }
        case SAMPLE_TAPING_LIST_FAILED:
            return {
                tapingList: [],
                error: action.payload
            }
        default:
            return state;
    }
}