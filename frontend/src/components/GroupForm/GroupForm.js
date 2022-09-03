import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {groupActions} from "../../redux";

const GroupForm = () => {
    const {groupForUpdate} = useSelector(state => state.groups);
    const {register, reset, handleSubmit, setValue} = useForm({mode: "onTouched"});
    const dispatch = useDispatch();

    useEffect(() => {
        if (groupForUpdate) {
            const {name, description} = groupForUpdate;
            setValue('name', name);
            setValue('description', description)
        }
    }, [groupForUpdate, setValue]);

    const saveGroup = async (savedGroup) => {
        if (groupForUpdate) {
            await dispatch(groupActions.updateById({updGroup: savedGroup, id: groupForUpdate.id}))
        } else {
            await dispatch(groupActions.createGroup({group: savedGroup}))
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(saveGroup)}>
            <div><label>Name: <input type="text" {...register('name')}/></label></div>
            <div><label>Description: <input type="text" {...register('description')}/></label></div>
            <button>{groupForUpdate ? 'Update' : 'AddGroup'}</button>
        </form>
    );
};

export {
    GroupForm
};