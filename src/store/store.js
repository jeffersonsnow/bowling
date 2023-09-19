import { configureStore } from "@reduxjs/toolkit";
import playerReducer from '../features/player/playerSlice.js';
export const store = configureStore({
    reducer: playerReducer
});