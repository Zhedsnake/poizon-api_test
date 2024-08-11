import {ElapsedTimeAction, ElapsedTimeActionTypes, ElapsedTimeState} from "../../../types/elapsedTime.ts";


const initialState: ElapsedTimeState = {
    data: 0
};


export const elapsedTimeReducer = (state = initialState, action: ElapsedTimeAction): ElapsedTimeState => {
    switch (action.type) {
        case ElapsedTimeActionTypes.GET_ELAPSED_TIME_SUCCESS:
            return {data: action.payload};
        case ElapsedTimeActionTypes.DEF_ELAPSED_TIME:
            return {...state, ...initialState};
        default:
            return state;
    }
};


