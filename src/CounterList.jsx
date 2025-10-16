import { useSelector, useDispatch } from "react-redux";
import Counter from "./Counter.jsx";
import { addCounter } from "./counterSlice.js";

export default function CounterList() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  console.log(counters);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-3xl font-bold mb-4">Multi Counter App</h1>
      <button
        onClick={() => dispatch(addCounter())}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        + Add Counter
      </button>

      {counters.list.map((c) => (
        <Counter key={c.id} id={c.id} value={c.value} />
      ))}
    </div>
  );
}
