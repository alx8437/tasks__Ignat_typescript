import React from "react";
import {AffairType} from "./HW2";
import styles from "./Affair.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};

    return (
        <div className={styles.wrapper}>
            <ul>
                <li className={styles.item}>
                    id: {props.affair._id},
                    detail: {props.affair.name},
                    priority: {props.affair.priority}
                </li>
            </ul>

            <SuperButton className={styles.buttonRemove} onClick={deleteCallback}>X</SuperButton>
        </div>
    );
}

export default Affair;
