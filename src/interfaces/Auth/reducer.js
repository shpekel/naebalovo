import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    page: 'sign-up',
}

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
    },
})

export const { setPage} = authReducer.actions

export default authReducer.reducer