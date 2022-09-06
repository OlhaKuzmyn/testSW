import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../redux";
import {User} from "../User/User";
import css from "./Users.module.css"

const Users = () => {
    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll())
    }, [dispatch])

    return (
        <div className={css.bigBox}>
            <div className={css.topBox}>
                <div><p>ID</p></div>
                <div><p>Username</p></div>
                <div><p>Created</p></div>
                <div><p>Group</p></div>
                <div><p>Actions</p></div>
            </div>
            <hr/>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {
    Users
};