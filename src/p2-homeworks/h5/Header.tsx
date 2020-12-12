import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {v1} from "uuid";
import {PATH} from "./Routes";

type MenuActiveType = {
    id: string
    title: string
    isActive: boolean
    navlink: string
}

function Header() {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [menuActive, setMenuActive] = useState<Array<MenuActiveType>>([
        {id: v1(), navlink: "/", title: "PreJunior", isActive: false},
        {id: v1(), navlink: PATH.JUNIOR, title: "Junior", isActive: false},
        {id: v1(), navlink: PATH.JUNIOR_PLUS, title: "JuniorPlus", isActive: false}
    ])

    function setStatusActive(id: string) {
        const newChoice = menuActive.map(m => ({...m, isActive: false}))
        let choice = newChoice.find(item => item.id === id)
        if (choice) {
            choice.isActive = !choice.isActive
            setMenuActive([...newChoice])
        }

    }

    let styleForMenu = showMenu ? `${s.list}` : `${s.listNone}`;

    return (
        <div className={s.navbarWrapper}>
            <div onClick={() => setShowMenu(!showMenu)} className={s.myTaskShow}>Menu <span>show/hide</span></div>
            <div className={styleForMenu}>
                {menuActive.map(m => <div
                    key={m.id}
                    className={m.isActive ? `${s.activeItem}` : ''}
                    onClick={() => setStatusActive(m.id)}
                >
                    <NavLink className={s.navlink} to={m.navlink}>{m.title}</NavLink>
                </div>)}
            </div>
        </div>
    );
}

export default Header;
