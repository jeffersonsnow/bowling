// turnSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPlayerIndex: 0, // Index of the player currently taking a turn
    currentFrame: 0, // Index of the active frame (0-9 for a typical game)
    currentRoll: 1, // 1 for the first roll, 2 for the second roll, 3 for the third roll (if applicable)
};

export const turnSlice = createSlice({
    name: 'turn',
    initialState,
    reducers: {
        nextPlayer: (state, action) => {
            // Increment the currentPlayerIndex and reset other turn-related values as needed
            console.log('do I get called?', action)
            state.currentPlayerIndex += 1;

            // You might want to reset frame and roll counts as well
            state.currentFrame = 0;
            state.currentRoll = 1;

            // If you reach the end of the player list, loop back to the first player
            if (state.currentPlayerIndex > action.payload) {
                state.currentPlayerIndex = 0;
            }
        },
        nextFrame: (state, action) => {
            // Logic to move to the next frame
        },
        nextRoll: (state, action) => {
            // Logic to move to the next roll within the frame
        },
    }
});

export const { nextPlayer, nextFrame, nextRoll } = turnSlice.actions;

export default turnSlice.reducer;
