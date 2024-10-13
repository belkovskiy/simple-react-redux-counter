import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';
import { RootState } from '../store';

const Counter: React.FC = ()=> {


  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return(
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
};

export default Counter;