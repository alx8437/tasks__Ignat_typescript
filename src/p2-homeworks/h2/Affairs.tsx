import React, {Dispatch, SetStateAction} from "react";
import Affair from "./Affair";
import {AffairPriorityType, AffairType} from "./HW2";
import styles from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: Dispatch<SetStateAction<AffairPriorityType>>
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")}; // need to fix
    const setHigh = () => {props.setFilter("high")};
    const setMiddle = () => {props.setFilter("middle")};
    const setLow = () => {props.setFilter("low")};

    return (
        <div>
            {mappedAffairs}
            <div  className={styles.buttonWrapper}>
                <button className={styles.button} onClick={setAll}>All</button>
                <button className={styles.button} onClick={setHigh}>High</button>
                <button className={styles.button} onClick={setMiddle}>Middle</button>
                <button className={styles.button} onClick={setLow}>Low</button>
            </div>

        </div>
    );
}

export default Affairs;
