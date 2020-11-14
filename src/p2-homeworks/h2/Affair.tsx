import React from "react";
import {AffairType} from "./HW2";
import styles from "./Affair.module.css"

type AffairPropsType = {
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};

    return (
        <div className={styles.wrapper}>
            <ul>
                <li>
                    id: {props.affair._id},
                    detail: {props.affair.name},
                    priority: {props.affair.priority}
                </li>
            </ul>

            <button className={styles.buttonWrapper} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
