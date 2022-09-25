import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {counter:0}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        increse(state, actions){
            state.counter = state.counter + actions.payload;
        },
        decrement(state){
            state.counter--;
        }
    }
});

const stroe = configureStore({
    reducer: counterSlice.reducer
});

export const counterAction = counterSlice.actions;
export default stroe;