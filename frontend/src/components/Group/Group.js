import React from 'react';
import {useDispatch} from "react-redux";
import {groupActions} from "../../redux";
import css from "./Group.module.css"

const Group = ({group}) => {
    const {id, name, description} = group;
    const dispatch = useDispatch()
    return (
        <div className={css.itemBox}>
            <div>
                <p>{id}</p>
            </div>
            <div>
                <p>{name}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div className={css.buttons}>
                <button onClick={()=>dispatch(groupActions.setGroupForUpd({group}))}>Update</button>
                <button onClick={()=>dispatch(groupActions.deleteById({id}))}>Delete</button>
            </div>
        </div>
    );
};

export {
    Group
};