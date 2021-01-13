import React from "react";
import Clock from "./Clock";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";


function HW9() {
    return (
        <div>
            homeworks 9
            <div className={s.wrapperContent_HW}>
                <Clock/>
            </div>
            <hr/>
        </div>
    );
}

export default HW9;
