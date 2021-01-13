export enum ACTIONS_TYPE {
    TOGGLE_TRUE =  "HW10/ToggleTrue",
    TOGGLE_FALSE =  "HW10/ToggleFalse",
}

export type InitStateType = {
    toggle: boolean,
}

type ToggleTrueActionType = {
    type: ACTIONS_TYPE.TOGGLE_TRUE,
    toggle: boolean,
}

type ToggleFalseActionType = {
    type: ACTIONS_TYPE.TOGGLE_FALSE,
    toggle: boolean,
}


type TogglePreloaderActionTypes = ToggleTrueActionType | ToggleFalseActionType

const initState: InitStateType = {
    toggle: false,
};



export const loadingReducer = (state = initState, action: TogglePreloaderActionTypes): InitStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.TOGGLE_TRUE: {
            return {...state, toggle: action.toggle};
        }
        case ACTIONS_TYPE.TOGGLE_FALSE: {
            return {...state, toggle: action.toggle}
        }
        default: return state;
    }
};

export const toggleTrueAC = (loading: boolean): ToggleTrueActionType => {
    return {
        type: ACTIONS_TYPE.TOGGLE_TRUE,
        toggle: true,
    }
};

export const toggleFalseAC = (loading: boolean): ToggleFalseActionType => {
    return {
        type: ACTIONS_TYPE.TOGGLE_FALSE,
        toggle: false,
    }
};