import React from 'react';
import {useDispatch} from "react-redux";
import {groupActions} from "../../redux";

const Group = ({group}) => {
    const {id, name, description} = group;
    const dispatch = useDispatch()
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{description}</p>
            <button onClick={()=>dispatch(groupActions.setGroupForUpd({group}))}>Update</button>
            <button onClick={()=>dispatch(groupActions.deleteById({id}))}>Delete</button>
        </div>
    );
};

export {
    Group
};