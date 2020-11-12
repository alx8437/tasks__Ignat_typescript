import React from "react";
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {


    return (
        <div className={styles.message}>
            <img src={props.avatar} alt=""/>
            <div className={styles.content}>
                <div className={styles.name}>{props.name}</div>
                <div>{props.message}</div>
                <div>{props.time}</div>
            </div>

        </div>
    );

}

export default Message;
