import React from 'react';
import {UserForm, Users} from "../../components";
import css from "./UserPage.module.css"

const UsersPage = () => {
    return (
        <div className={css.page}>
            <Users/>
            <UserForm/>
        </div>
    );
};

export {
    UsersPage
};