import React from "react";
import s from "./Greeting.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error?: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    // const inputClass = (error) ? `${s.inputGreetingWrapper}` : ''

    return (<>
            <div className={s.wrapperGreeting}>
                <SuperInputText
                    value={name}
                    onChange={setNameCallback}
                    error={error}
                />
                <SuperButton red={error !== ""} onClick={addUser}>add</SuperButton>
                <span className={s.totalUsersGreeting}>{totalUsers}</span>
            </div>
        </>

    );
}

export default Greeting;
