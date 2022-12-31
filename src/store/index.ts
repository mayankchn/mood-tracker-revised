import { createStore } from "redux"
import reducer from "../reducer"

export type Moment = {
    intensity:number,
    when:Date,
}

export type State = {
    happyMoments:Moment[],
    sadMoments:Moment[],
}

export const initialState = {
    happyMoments:[],
    sadMoments:[],
}

export const store = createStore(reducer,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())