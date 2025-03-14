import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, clear, deleteTask } from "./taskSlice";
import { Button } from "../../components/button/button";

export function AddTask() {
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(add(input));
    setInput("");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <Button
                label={"Delete"}
                onClick={() => dispatch(deleteTask(index))}
              />
            </li>
          ))}
        </ul>

        <Button
          label={"Borrar todos"}
          width="100%"
          padding="10px"
          onClick={() => dispatch(clear())}
        />
      </div>
    </div>
  );
}
