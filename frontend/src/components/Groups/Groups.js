import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {groupActions} from "../../redux";
import {Group} from "../Group/Group";

const Groups = () => {
    const {groups} = useSelector(state => state.groups);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(groupActions.getAll())
    }, [dispatch])

    return (
        <div>
            {groups.map(group => <Group key={group.id} group={group}/>)}
        </div>
    );
};

export {
    Groups
};