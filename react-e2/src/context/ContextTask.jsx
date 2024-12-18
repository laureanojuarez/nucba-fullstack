import {useState} from "react";
import {createContext} from "react";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState(["Tarea 1", "Tarea 2"]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
    setError("");
  };

  const addTask = () => {
    console.log("Agregando tarea");
    if (newTask.trim() === "") {
      setError("La tarea no puede estar vacia");
      return;
    }
    if (tasks.includes(newTask)) {
      setError("La tarea ya existe");
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    console.log("Borrando tarea");
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  };

  const deleteAllTasks = () => {
    console.log("Borrando todas las tareas");
    setTasks([]);
  };

  const taskData = {
    tasks,
    handleInputChange,
    addTask,
    deleteTask,
    deleteAllTasks,
    error,
  };

  return (
    <TaskContext.Provider value={taskData}>{children}</TaskContext.Provider>
  );
};
