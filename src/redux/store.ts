import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {AuthSlide} from "./slices/AuthSlide.ts";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

// const store = configureStore({
//     reducer: {
//         userInfo: AuthSlide.reducer
//     }
// })
const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist:[]
}
const reducer = combineReducers({
    userInfo: AuthSlide.reducer,


})

const persistedReducer = persistReducer(persistConfig, reducer)
const store = configureStore({
    reducer: persistedReducer
})


export default store