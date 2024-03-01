"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { increment, decrement } from "@/store/slices/counterSlice";

const Count = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);
  return (
    <div className="text-8xl">
      <div>{value}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Count;
