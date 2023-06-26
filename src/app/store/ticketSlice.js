import { createSlice } from '@reduxjs/toolkit'
const ticketSlice = createSlice({
    name: 'ticketCount',
    initialState: {},
    reducers: {
        addTicket(state, action) {
            state[action.payload]++
        },
        removeTicket(state, action) {
            state[action.payload]--
        },
        setTicketIds(state, action) {
            action.payload.map(
                (item) => state[item] === undefined && (state[item] = 0)
            )
        },
        deleteFilm(state, action) {
            state[action.payload] = 0
        },
    },
})

export const { addTicket, removeTicket, setTicketIds, deleteFilm } =
    ticketSlice.actions

export default ticketSlice.reducer
