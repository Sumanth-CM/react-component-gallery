// import React, { useState } from 'react';
import { useState } from "react";

export default function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Counter Demo</h3>
      <p>A simple counter with increment and decrement button.</p>

      {/* 2. Display the count and the controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 0",
        }}
      >
        <button onClick={() => setCount((c) => c - 1)} aria-label="Decrement">
          -
        </button>

        {/* Current Count Display */}
        <span
          style={{
            minWidth: 40,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {count}
        </span>

        {/* Increment Button */}
        <button onClick={() => setCount((c) => c + 1)} aria-label="Increment">
          +
        </button>
        {/* Reset Button */}
        <button onClick={() => setCount(0)} aria-label="Reset">
          Reset
        </button>
      </div>
    </div>
  );
}
