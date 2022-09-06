import React from 'react';
import {NavLink} from "react-router-dom";
import css from "./Header.module.css"

const Header = () => {
    return (
        <div className={css.menu}>
            <div >
                <NavLink className={css.menulink} to={'/users'}>Users</NavLink>
            </div>
            <div>
                <NavLink className={css.menulink} to={'/groups'}>Groups</NavLink>
            </div>
        </div>
    );
};

export {
    Header
};