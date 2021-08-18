import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {

  const counter = useSelector( state => state.counter);
  const show = useSelector(state => state.showCounter)
  const dispatch = useDispatch();

  const incrementHandler = ()=>{
    dispatch(counterActions.increment())
  }

  const decrementHandler = ()=>{
    dispatch(counterActions.decrement())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div> 
        <button onClick={incrementHandler}> Increment </button>
        <button onClick={decrementHandler}> Decrement </button>
        <button onClick={increaseHandler}> Increment By 5 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
