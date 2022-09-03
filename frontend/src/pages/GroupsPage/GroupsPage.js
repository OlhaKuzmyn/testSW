import React from 'react';
import {GroupForm, Groups} from "../../components";

const GroupsPage = () => {
    return (
        <div>
            <h1>Groups</h1>
            <Groups/>
            <GroupForm/>
        </div>
    );
};

export {
    GroupsPage
};