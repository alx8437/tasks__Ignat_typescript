import {combineReducers, createStore} from "redux";
import {loadingReducer} from "./loadingReducer";


const reducers = combineReducers({
    loading: loadingReducer,
});

const store = createStore(reducers);
export type AppRootStateType = ReturnType<typeof reducers>

export default store;

// @ts-ignore
window.store = store; // for dev