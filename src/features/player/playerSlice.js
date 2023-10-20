import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    players: []
};

// Helper function to initialize frame scores
const initializeFrameScores = () => {
    const frameScores = new Array(10).fill({ attempt1: 0, attempt2: 0, total: 0, id: nanoid() });
    frameScores[9].attempt3 = 0;
    return frameScores;
};

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addPlayer: (state, action) => {
            const player = {
                id: nanoid(),
                name: action.payload,
                frameScores: initializeFrameScores()
            }
            state.players.push(player);
        },
        removePlayer: (state, action) => {
            state.players = state.players.filter(player => {
                return player.id !== action.payload
            })
        },
        updatePlayerScore: (state, action) => {
            const { playerId, frameIndex, rollAttempt, score } = action.payload;
            console.log(action.payload);

            const playerIndex = state.players.findIndex(player => player.id === playerId);

            if (playerIndex !== -1) {
                // Clone the player object and update the score
                const updatedPlayer = { ...state.players[playerIndex] };
                updatedPlayer.frameScores[frameIndex][`attempt${rollAttempt}`] = score;

                // Update the player in the players array
                state.players[playerIndex] = updatedPlayer;
            }
        }
    }
});

export const {addPlayer, removePlayer, updatePlayerScore} = playerSlice.actions;

export default playerSlice.reducer;