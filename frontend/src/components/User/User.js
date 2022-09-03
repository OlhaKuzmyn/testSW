import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {
    const {id, username, created, group:{name}} = user;
    const dispatch = useDispatch()
    return (
        <div>
            <p>{id}</p>
            <p>{username}</p>
            <p>{created}</p>
            <p>group: {name}</p>
            <button onClick={()=>dispatch(userActions.deleteById({id}))}>Delete</button>
        </div>
    );
};

export {
    User
};