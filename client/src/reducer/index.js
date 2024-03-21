import {combineReducers} from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice.js'

const rootReducer = combineReducers({
    user: userReducer,
})


export default rootReducer;