import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {groupActions} from "../../redux";
import css from "./GroupForm.module.css"
import {joiResolver} from "@hookform/resolvers/joi";
import {groupValidator} from "../../validators";

const GroupForm = () => {
    const {groupForUpdate} = useSelector(state => state.groups);
    const {register, reset, handleSubmit, setValue, formState: {errors}} = useForm({mode: "onTouched", resolver: joiResolver(groupValidator)});
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
        <div>
            <h2>{groupForUpdate ? 'Update' : 'AddGroup'}</h2>
            <form onSubmit={handleSubmit(saveGroup)}>
                <div><label>Name: <input type="text" {...register('name')}/></label></div>
                {errors.name && <div className={css.errorMessage}>{errors.name.message}</div>}
                <div><label>Description: <input type="text" {...register('description')}/></label></div>
                {errors.description && <div className={css.errorMessage}>{errors.description.message}</div>}
                <button>{groupForUpdate ? 'Update' : 'AddGroup'}</button>
            </form>
        </div>
    );
};

export {
    GroupForm
};