import { useDispatch } from "react-redux";
import { increment, decrement, reset, removeCounter } from "./counterSlice.js";

export default function Counter({ id, value }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-4 bg-white shadow p-4 rounded-xl w-80 justify-between">
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(decrement(id))}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          -
        </button>
        <span className="text-2xl font-semibold">{value}</span>
        <button
          onClick={() => dispatch(increment(id))}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(reset(id))}
          className="px-3 py-1 bg-gray-400 text-white rounded"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch(removeCounter(id))}
          className="px-3 py-1 bg-black text-white rounded"
        >
          ❌
        </button>
      </div>
    </div>
  );
}
