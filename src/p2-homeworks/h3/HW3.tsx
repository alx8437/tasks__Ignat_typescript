import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {
        const newUser = {_id: v1(), name}
        const newUsers: Array<UserType> = [...users, newUser]
        setUsers(newUsers);
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}
            />
        </div>
    );
}

export default HW3;
