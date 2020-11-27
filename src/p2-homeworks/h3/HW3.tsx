import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";


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
            <div className={s.wrapperContent_HW}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    );
}

export default HW3;
