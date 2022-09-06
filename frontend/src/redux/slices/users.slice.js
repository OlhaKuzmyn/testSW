import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState = {
    users: [],
    userForUpdate: null,
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async () => {
        const {data} = await userService.getAll();
        return data
    }
);

const addUser = createAsyncThunk(
    'userSlice/addUser',
    async ({user, group_id}, {dispatch, rejectWithValue}) => {
        const {data} = await userService.addUser(user, group_id);
        dispatch(create({user: data}))
    }
);

const updateById = createAsyncThunk(
    'userSlice/updateById',
    async ({updUser, user_id, group_id}, {dispatch}) => {
        const {data} = await userService.updateById(user_id, updUser, group_id);
        dispatch(updateUser({updUser: data, group_id, user_id}))
    }
)

const deleteById = createAsyncThunk(
    'userSlice/deleteById',
    async ({id}, {dispatch}) => {
        await userService.deleteById(id);
        dispatch(delUser({id}))
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.users.push(action.payload.user)
        },
        setUserForUpdate: (state, action) => {
          state.userForUpdate = action.payload.user
        },
        updateUser: (state, action) => {
            console.log(action.payload.user_id);
            state.users = state.users.map(user => user.id === action.payload.user_id ? action.payload.updUser : user)
            state.userForUpdate = null
        },
        delUser: (state, action) => {
            state.users=state.users.filter(user=>user.id!==action.payload.id)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload
            })

    }
});

const {reducer: userReducer, actions: {delUser, create, updateUser, setUserForUpdate}} = userSlice;

const userActions = {
    getAll,
    addUser,
    deleteById,
    setUserForUpdate,
    updateById,

};

export {
    userReducer,
    userActions
}