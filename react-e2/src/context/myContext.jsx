import {useState} from "react";
import {createContext} from "react";

export const Contexto = createContext();

export const ContextProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const addTask = () => {
    if (task.trim()) {
      if (tasks.includes(task)) {
        setError("La tarea ya existe");
      } else {
        setTasks([...tasks, task]);
        setTask("");
        setError("");
      }
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const value = {
    tasks,
    setTasks,
    task,
    setTask,
    error,
    setError,
    addTask,
    deleteTask,
    clearTasks,
  };

  return <Contexto.Provider value={value}>{children}</Contexto.Provider>;
};
