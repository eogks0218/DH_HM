const START_LOADING = 'loading/START_LOADING';
const END_LOADING = 'loading/END_LOADING';

export const start_loading = () => ({ type: START_LOADING })
export const end_loading = () => ({ type: END_LOADING })

const initialState = {
    isLoading: false
}

export const loading = (state=initialState, action) => {
    switch(action.type){
        case START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case END_LOADING:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}