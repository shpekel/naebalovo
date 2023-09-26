import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
    rendered: [],
    iterator: 0
}

const notificationsReducer = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        send: (state, action) => {
            const id = state.iterator++
            const {type, text, duration } = action.payload;
            state.list.push({ id, type, text, duration });
            state.rendered.push(id);

            setTimeout(() => {
                window.removeNotify(id)
            }, duration * 1000)
        },
        removeRender: (state, action) => {
            const id = action.payload
            const index = state.rendered.indexOf(id)

            if(!~index) return
            state.rendered.splice(index, 1)
        },
        remove: (state, action) => {
            const id = action.payload
            const index = state.list.findIndex((notify) => notify.id === id)

            if(!~index) return
            state.list.splice(index, 1)
        }
    },
});

export const { send, removeRender, remove } = notificationsReducer.actions;

export default notificationsReducer.reducer;