import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {groupUserService} from "../../services";

const initialState = {
    users: [],
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async () => {
        const {data} = await groupUserService.getUsers();
        return data
    }
);

const deleteById = createAsyncThunk(
    'userSlice/deleteById',
    async ({id}, {dispatch}) => {
        await groupUserService.deleteUserById(id);
        dispatch(delUser({id}))
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
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

const {reducer: userReducer, actions: {delUser}} = userSlice;

const userActions = {
    getAll,
    deleteById,
};

export {
    userReducer,
    userActions
}