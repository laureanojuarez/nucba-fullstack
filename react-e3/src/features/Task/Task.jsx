import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, clear, deleteTask } from "./taskSlice";
import Button from "../../components/button/button";
import { useEffect } from "react";

export function AddTask() {
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(add(input));
    setInput("");
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <form onSubmit={handleSubmit} className="flex h-10 w-full gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 rounded-md w-full h-10"
          placeholder="Que tarea deseas agregar?"
        />
        <Button type="submit" className="px-4">
          Agregar
        </Button>
      </form>

      <ul className="flex flex-col w-full gap-2 px-3">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center">
            {task}
            <Button
              onClick={() => dispatch(deleteTask(index))}
              className="bg-red-500 py-1 px-2"
            >
              Borrar
            </Button>
          </li>
        ))}
      </ul>

      <Button
        onClick={() => dispatch(clear())}
        className="bg-red-500 w-full py-2"
      >
        Borrar todos
      </Button>
    </div>
  );
}
