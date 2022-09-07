// import {client} from "../../services";
// import {gql} from "@apollo/client";
// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
//
// const initialState = {
//     groups: [],
// }
//
// const getGroups = createAsyncThunk(
//     'graphQLSlice/getGroups',
//     async () => {
//         const {data} = await client.query({
//         query: gql `
//             query {
//                 allGroups {
//                     id
//                     name
//                     description
//                 }
//             }
//         `
//         })
//         return data
//     }
// )
//
//
// const graphQLSlice = createSlice({
//     name: 'graphQLSlice',
//     initialState,
//     reducers: {
//
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getGroups.fulfilled, (state, action) => {
//                 state.groups = action.payload.allGroups
//             })
//     }
// })
//
// const {reducer: graphQLReducer} = graphQLSlice;
//
// const graphQLActions = {
//     getGroups,
// }
//
// export {
//     graphQLActions,
//     graphQLReducer
// }