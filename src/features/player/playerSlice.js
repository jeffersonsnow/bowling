import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    players: []
};

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addPlayer: (state, action) => {
            const player = {
                id: nanoid(),
                name: action.payload,
                frameScores: []
            }
            state.players.push(player);
        },
        removePlayer: (state, action) => {
            state.players = state.players.filter(player => {
                return player.id !== action.payload
            })
        },
    }
});

export const {addPlayer, removePlayer} = playerSlice.actions;

export default playerSlice.reducer;