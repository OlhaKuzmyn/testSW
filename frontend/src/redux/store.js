import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {userReducer} from "./slices/users.slice";
import {groupReducer} from "./slices/groups.slice";


const rootReducer = combineReducers({
    users: userReducer,
    groups: groupReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}