import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {groupUserActions} from "../../redux";
import {Group} from "../Group/Group";

const Groups = () => {
    const {groups} = useSelector(state => state.groupUserReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(groupUserActions.getGroups())
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