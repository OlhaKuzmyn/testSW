import React, {useEffect} from 'react';
import {GroupForm, Groups} from "../../components";
// import {graphQLActions} from "../../redux/slices/graphQL.slice";
// import {useDispatch, useSelector} from "react-redux";
import css from "./GroupsPage.module.css"

const GroupsPage = () => {
    // const {groups} = useSelector(state => state.graphQL)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(graphQLActions.getGroups())
    // }, [dispatch])
    // console.log(groups);
    return (
        <div className={css.page}>
            <Groups/>
            <GroupForm/>
        </div>
    );
};

export {
    GroupsPage
};