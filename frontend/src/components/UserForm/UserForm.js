import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {groupActions, userActions} from "../../redux";

const UserForm = () => {
    const {handleSubmit, reset, setValue, register} = useForm({mode: "onTouched"});
    const {groups} = useSelector(state => state.groups);
    const {userForUpdate} = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(groupActions.getAll())
    }, [dispatch]);

    useEffect(() => {
        if (userForUpdate) {
            const {username, group: {id}} = userForUpdate;
            setValue('group', id)
            setValue('username', username)
        }
    }, [userForUpdate, setValue])

    const saveUser = async (savedUser) => {
        const group_id = savedUser.group
        delete savedUser.group
        if (userForUpdate){
            await dispatch(userActions.updateById({updUser: savedUser, group_id: group_id, user_id: userForUpdate.id}))
        } else {
            await dispatch(userActions.addUser({user: savedUser, group_id: group_id}))
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(saveUser)}>
            <div><label>Select group: <select name="groups" id="groups" {...register('group')}>
                {groups.map(group => <option value={group.id} key={group.id}>{group.name}</option>)}
            </select></label></div>
            <div><label>Username: <input type="text" {...register('username')}/></label></div>
            <button>{userForUpdate ? 'Update User' : 'Add User'}</button>
        </form>
    );
};

export {
    UserForm
};