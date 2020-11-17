import React from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: any
    addUser: () => void
    error?: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = (error) ? `${s.inputGreetingWrapper}` : ''

    return (<>
            <div className={s.wrapperGreeting}>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                />
                <button className={s.buttonGreeting} onClick={addUser}>add</button>
                <span className={s.totalUsersGreeting}>{totalUsers}</span>
            </div>
            <div className={s.errorMessageGreeting}>{error}</div>
        </>

    );
}

export default Greeting;
