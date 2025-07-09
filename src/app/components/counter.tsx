"use client"; //useStateはクライアントコンポーネントでしか使えないため、"use client"を追加
import { useState } from "react";

export const Counter = () => {
  console.log("Counter component");
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Clucked {count} times</button>
  );
};