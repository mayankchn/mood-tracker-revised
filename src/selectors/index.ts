import { State, store } from "../store";

export function happinesSelector(store:State) {
    return store.happyMoments;
}

export function sadnessSelector(store:State) {
    return store.sadMoments;
}