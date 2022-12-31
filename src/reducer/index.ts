import { AnyAction } from "redux";
import { CLEARBUTTONCLICKED, HAPPYBUTTONCLICKED, SADBUTTONCLICKED } from "../action";
import { initialState, State } from "../store";

export default (currentState: State = initialState, action: AnyAction): any => {
    console.log('current state is : ', currentState)
    switch (action.type) {
        case HAPPYBUTTONCLICKED:
            return {
                ...currentState,
                happyMoments: [...currentState.happyMoments, { intensity: action.payload.intensity, when: action.payload.when }]
            }
        case SADBUTTONCLICKED:
            return {
                ...currentState,
                sadMoments: [...currentState.sadMoments, { intensity: action.payload.intensity, when: action.payload.when }]
            }
        case CLEARBUTTONCLICKED:
            return {
                ...currentState,
                happyMoments:[],
                sadMoments:[]
            }
        default:
            return currentState
    }
}