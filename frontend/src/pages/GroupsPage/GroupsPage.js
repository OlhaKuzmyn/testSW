import React, {useEffect} from 'react';
import {GroupForm, Groups} from "../../components";
import {graphQLActions} from "../../redux/slices/graphQL.slice";
import {useDispatch, useSelector} from "react-redux";

const GroupsPage = () => {
    const {groups} = useSelector(state => state.graphQL)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(graphQLActions.getGroups())
    }, [dispatch])
    console.log(groups);
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