import React, { useState } from "react";
import useCounter from '../customHooks/useCounter'

function Counter1() {
  const [count, setCount] = useState(0);
  const multipleOfTen = useCounter(count)

  return (
    <section>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <h1 className={multipleOfTen ? "purple" : null}>The count is {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    </section>
  );
}

export default Counter1
