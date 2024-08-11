
export interface ElapsedTimeState {
    data: number
}

export enum ElapsedTimeActionTypes {
    GET_ELAPSED_TIME_SUCCESS = 'GET_ELAPSED_TIME_SUCCESS',
    DEF_ELAPSED_TIME='DEF_ELAPSED_TIME',
}
interface ElapsedTimeSuccessAction {
    type: ElapsedTimeActionTypes.GET_ELAPSED_TIME_SUCCESS;
    payload: number;
}
interface CleanElapsedTimeAction {
    type: ElapsedTimeActionTypes.DEF_ELAPSED_TIME;
}
export type ElapsedTimeAction = ElapsedTimeSuccessAction | CleanElapsedTimeAction
