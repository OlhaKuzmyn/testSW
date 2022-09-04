import React from 'react';
import {UserForm, Users} from "../../components";

const UsersPage = () => {
    return (
        <div>
            <h1>Users</h1>
            <Users/>
            <UserForm/>
        </div>
    );
};

export {
    UsersPage
};