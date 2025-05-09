import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../app/features/counter/counterSlice';

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{counter}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <br />
        <button onClick={() => dispatch(incrementByAmount(7))}>
          increment by 7
        </button>
      </div>
    </div>
  );
};
export default Counter;
