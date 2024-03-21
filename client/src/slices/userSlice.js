import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser:(state,values)=>{
              state.user  = values.payload
        }
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;