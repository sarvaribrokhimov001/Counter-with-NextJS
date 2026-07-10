"use client";
import { useState } from "react";
import "./globals.css"

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
    <div className="container">
      <h1 className="counter"> Counter: {count} </h1>
      <div className="buttons">
      <button className="decrement__btn" onClick={() => setCount(count - 1)}> - </button>
      <button className="increment__btn" onClick={() => setCount(count + 1)}> + </button>
      <button className="reset__btn" onClick={() => setCount(0)}> Reset </button>
      </div>
    </div>
    </div>
  );
}