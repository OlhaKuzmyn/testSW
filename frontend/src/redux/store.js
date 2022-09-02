import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {groupUserReducer} from "./slices/group_user.slice";


const rootReducer = combineReducers({
    groupUserReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}