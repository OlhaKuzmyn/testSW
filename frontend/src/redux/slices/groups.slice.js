import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {groupService} from "../../services";

const initialState = {
    groups: [],
    groupForUpdate: null
};

const getAll = createAsyncThunk(
    'groupSlice/getAll',
    async () => {
        const {data} = await groupService.getAll();
        return data
    }
);

const createGroup = createAsyncThunk(
    'groupSlice/createGroup',
    async ({group}, {dispatch}) => {
        const {data} = await groupService.create(group);
        dispatch(create({group: data}))
    }
);

const deleteById = createAsyncThunk(
    'groupSlice/deleteById',
    async ({id}, {dispatch}) =>{
        await groupService.deleteById(id);
        dispatch(delGroup({id}))
    }
);

const updateById = createAsyncThunk(
    'groupSlice/updateById',
    async ({id, updGroup}, {dispatch}) => {
        const {data} = await groupService.updateById(id, updGroup);
        dispatch(updateGroup({updGroup: data, id}))
    }
);

const groupSlice = createSlice({
    name: 'groupSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.groups.push(action.payload.group)
        },
        delGroup: (state, action) => {
            state.groups=state.groups.filter(group=>group.id!==action.payload.id)
        },
        setGroupForUpd: (state, action) => {
            state.groupForUpdate = action.payload.group
        },
        updateGroup: (state, action) => {
            state.groups = state.groups.map(group => group.id === action.payload.id ? action.payload.updGroup : group)
            state.groupForUpdate = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.groups = action.payload
            })
    }
});

const {reducer: groupReducer, actions: {create, delGroup, updateGroup, setGroupForUpd}} = groupSlice;

const groupActions = {
    createGroup,
    getAll,
    deleteById,
    updateById,
    setGroupForUpd,

};

export {
    groupReducer,
    groupActions
}