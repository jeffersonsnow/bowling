import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    players: ['Jared']
};

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addPlayer: (state, action) => {
            console.log('do I go off?', state, action)
            const player = {
                id: nanoid(),
                name: action.payload,
                frameScores: []
            }
            state.players.push(player);
            console.log('here', state.players);
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