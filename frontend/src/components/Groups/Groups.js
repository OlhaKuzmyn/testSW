import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {groupActions} from "../../redux";
import {Group} from "../Group/Group";
import css from "./Groups.module.css"

const Groups = () => {
    const {groups} = useSelector(state => state.groups);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(groupActions.getAll())
    }, [dispatch])

    return (
        <div className={css.bigBox}>
            <div className={css.topBox}>
                <div><p>ID</p></div>
                <div><p>Name</p></div>
                <div><p>Description</p></div>
                <div><p>Actions</p></div>
            </div>
            <hr/>
            {groups.map(group => <Group key={group.id} group={group}/>)}
        </div>
    );
};

export {
    Groups
};