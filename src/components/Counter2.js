import React, { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <h1>The second count is {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    </section>
  );
}

export default Counter2
