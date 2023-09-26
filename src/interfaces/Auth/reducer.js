import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 'sign-up',
    popup: '',
    currentCard: '',
    confirmCard: false,
    fullNameRegister: ''
}

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        setPopUp: (state, action) => {
            state.popup = action.payload
        },
        setCurrentCard: (state, action) => {
            state.currentCard = action.payload
        },
        setConfirmCard: (state, action) => {
            state.confirmCard = action.payload
            state.popup = ''
        },
        setFullNameRegister:(state, action) => {
            state.fullNameRegister = action.payload
        }
    }
})

export const { setPage, setPopUp, setConfirmCard, setCurrentCard, setFullNameRegister } = authReducer.actions

export default authReducer.reducer
