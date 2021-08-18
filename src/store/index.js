import {createStore} from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {counter : 0, showCounter : true};
const initialLoginState = {isLogin : false}

const counterSlice = createSlice({
    name : 'counter',
    initialState : initialCounterState,
    reducers : {
        increment(state) {
            state.counter ++;
        },
        decrement(state) {
            state.counter --;
        },
        increase(state,action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
  })

const loginSlice = createSlice({
    name : 'login',
    initialState : initialLoginState,
    reducers : {
        login(state) {
            state.isLogin = true
        },
        logout(state) {
            state.isLogin = false
        }
    }

})
const store = configureStore({
    reducer: { login : loginSlice.reducer }
});

export const counterActions = counterSlice.actions;
export const loginActions = loginSlice.actions;
export default store;