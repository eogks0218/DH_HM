import { start_loading, end_loading } from "./loading";
import sampleMassageData from "../sample/Massage.json"

const SAMPLE_MASSAGE_LIST_SUCCESS = 'massage/SAMPLE_MASSAGE_LIST_SUCCESS'
const SAMPLE_MASSAGE_LIST_FAILED = 'massage/SAMPLE_MASSAGE_LIST_FAILED'

export const sample_massage_list = (category) => async dispatch => {
    dispatch(start_loading());
    try{
        dispatch({ type: SAMPLE_MASSAGE_LIST_SUCCESS, category });
    }catch(e){
        dispatch({ type: SAMPLE_MASSAGE_LIST_FAILED, payload: e });
        throw(e);
    }finally{
        dispatch(end_loading());
        return;
    }
}

const initialState = {
    massageList: [],
    error: null
}

export const massage = (state=initialState, action) => {
    switch(action.type){
        case SAMPLE_MASSAGE_LIST_SUCCESS:
            if(action.category === "all"){
                return {
                    massageList: sampleMassageData,
                    error: null
                }
            }else if(action.category === ""){
                return {
                    massageList: [],
                    error: null
                }
            }else{
                const sample_massage_list_filter = sampleMassageData.filter(data => data.category === action.category)
                return {
                    massageList: sample_massage_list_filter,
                    error: null
                }
            }
        case SAMPLE_MASSAGE_LIST_FAILED:
            return {
                massageList: [],
                error: action.payload
            }
        default:
            return state;
    }
}