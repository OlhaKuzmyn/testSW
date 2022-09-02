import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {groupUserActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {
    const {users} = useSelector(state => state.groupUserReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(groupUserActions.getUsers())
    }, [dispatch])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {
    Users
};