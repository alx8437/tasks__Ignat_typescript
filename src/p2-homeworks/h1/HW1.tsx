import React from "react";
import Message from "./Message";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";

const date = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'})

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Aleksandr",
    message: "Hello! How are you? Today is nice weather - go to park!",
    time: date,
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}
            <div className={s.wrapperContent_HW}>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
            </div>

        </div>
    );
}

export default HW1;
