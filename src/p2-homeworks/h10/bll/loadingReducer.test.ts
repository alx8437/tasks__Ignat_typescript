import {InitStateType, loadingReducer, toggleFalseAC, toggleTrueAC} from "./loadingReducer";

test('set toggle preloader true', () => {

    const initialState: InitStateType = {
        toggle: false
    }

    const newState = loadingReducer(initialState, toggleTrueAC(true));
    expect(newState.toggle).toBe(true);
});

test('set toggle preloader false', () => {

    const initialState: InitStateType = {
        toggle: true
    }

    const newState = loadingReducer(initialState, toggleFalseAC(false));
    expect(newState.toggle).toBe(false);
});