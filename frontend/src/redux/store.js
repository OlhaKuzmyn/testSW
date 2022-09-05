import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {userReducer} from "./slices/users.slice";
import {groupReducer} from "./slices/groups.slice";
import {graphQLReducer} from "./slices/graphQL.slice";


const rootReducer = combineReducers({
    users: userReducer,
    groups: groupReducer,
    graphQL: graphQLReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}