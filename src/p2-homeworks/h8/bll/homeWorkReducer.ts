import {PeopleType} from "../HW8";

export type SortActionTypes = {
    type: "sort",
    payload: "up" | "down",
}

export type CheckActionTypes = {
    type: "check",
    payload: number,
}

type AllActionTypes = SortActionTypes | CheckActionTypes





export const homeWorkReducer = (state: PeopleType[], action: AllActionTypes): PeopleType[] => {
    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                //sort up
                const sortNameArr = state.map(item => item.name).sort();
                const newState: any = [];
                //search value from state array and push in new state
                sortNameArr.map((name: any) => {
                    state.map((obj: any) => {
                        if (obj.name === name) {
                            newState.push(obj);
                        }
                    })
                })
                return newState;
            }
            if (action.payload === "down") {
                //sort up
                const sortNameArrUp = state.map(item => item.name).sort();
                //sort down
                const sortNameArrDown = sortNameArrUp.reverse()
                const newState: any = [];
                //search value from state array and push in new state
                sortNameArrDown.map(name => {
                    state.map(obj => {
                        if (obj.name === name) {
                            newState.push(obj);
                        }
                    })
                })
                return newState;
            }
            return state
        }
        case "check": {
            return state.filter(item => item.age > action.payload);
        }
        default:
            return state
    }
};