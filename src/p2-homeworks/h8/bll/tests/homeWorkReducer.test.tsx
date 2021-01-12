import React from 'react';
import {CheckActionTypes, homeWorkReducer} from "../homeWorkReducer";
import {PeopleType} from "../../HW8";

let initialState: PeopleType[];

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "up"});

    expect(newState).toEqual([
        {_id: 1, name: "Александр", age: 66},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
        {_id: 2, name: "Коля", age: 16},
        {_id: 0, name: "Кот", age: 3},
    ]);
    expect(newState[newState.length - 1].name).toBe('Кот');
});
test("sort name down", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "down"});

    expect(newState).toEqual([
        {_id: 0, name: 'Кот', age: 3},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 1, name: 'Александр', age: 66}
    ]);

    expect(newState[0].name).toBe('Кот')
});

test("check age 18", () => {
    //To can change various age in payload property
    const action: CheckActionTypes = {
        type: "check",
        payload: 18,
    }

    const newState = homeWorkReducer(initialState, action);

    expect(newState.every((item: any) =>
        item.age > action.payload)).toBe(true);
});
