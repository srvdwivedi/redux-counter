import {createStore} from 'redux'

const counterReduer = (state = { counter : 0 }, action) => {
    if(action.type === "increment"){
       return {counter : state.counter+= 1}
    };
    if(action.type === "decrement" ){
        return {counter : state.counter-= 1}
    };
    if(action.type === "increase" ){
        return {counter : state.counter + action.amount}
    }
    return state;
};
const store = createStore(counterReduer)
export default store;