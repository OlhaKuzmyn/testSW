import React from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";
import css from "./User.module.css"

const User = ({user}) => {
    const {id, username, created, group:{name}} = user;
    const dispatch = useDispatch()
    return (
        <div className={css.itemBox}>
            <div>
                <p>{id}</p>
            </div>
            <div>
                <p>{username}</p>
            </div>
            <div>
                <p>{created}</p>
            </div>
            <div>
                <p>{name}</p>
            </div>
            <div className={css.buttons}>
                <button onClick={()=>dispatch(userActions.setUserForUpdate({user}))}>Update</button>
                <button onClick={()=>dispatch(userActions.deleteById({id}))}>Delete</button>
            </div>
        </div>
    );
};

export {
    User
};