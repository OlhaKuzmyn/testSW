import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {groupUserService} from "../../services";

const initialState = {
    groups: [],
    users: [],
}

const getGroups = createAsyncThunk(
    'groupUserSlice/getGroups',
    async () => {
        const {data} = await groupUserService.getGroups();
        return data
    }
);

const getUsers = createAsyncThunk(
    'groupUserSlice/getUsers',
    async () => {
        const {data} = await groupUserService.getUsers();
        return data
    }
)

const groupUserSlice = createSlice({
    name: 'groupUserSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGroups.fulfilled, (state, action) => {
                state.groups = action.payload
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
    }
})

const {reducer: groupUserReducer} = groupUserSlice;

const groupUserActions = {
    getGroups,
    getUsers
}

export {
    groupUserReducer,
    groupUserActions
}