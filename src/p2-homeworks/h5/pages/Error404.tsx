import React from "react";
import s from "./Error404.module.css"
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import {NavLink} from "react-router-dom";

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.error} >404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <SuperButton red={true}>
                <NavLink to={"/"} className={s.navlink}>Go home page</NavLink>
            </SuperButton>
        </div>
    );
}

export default Error404;
