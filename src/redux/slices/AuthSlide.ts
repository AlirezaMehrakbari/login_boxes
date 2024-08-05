import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    token: '',
    userId: null,
    userGuidRow: '',
    shouldChangePassword: false,
    isLoggedIn: false
}

export const AuthSlide = createSlice({
    name: 'AuthSlide',
    initialState: initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.token = action.payload.token
            state.userId = action.payload.userId
            state.userGuidRow = action.payload.userGuidRow,
                state.shouldChangePassword = action.payload.shouldChangePassword,
                state.isLoggedIn = true
        },
        setUserLogOut: (state) => {
            state.token = ''
            state.isLoggedIn = false
        }
    }
})

export const {setUserLogin, setUserLogOut} = AuthSlide.actions