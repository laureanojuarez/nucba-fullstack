import {useState} from "react";
import {createContext} from "react";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState(["Tarea 1", "Tarea 2"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    console.log("Agregando tarea");
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
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

  return (
    <TaskContext.Provider
      value={{tasks, handleInputChange, addTask, deleteTask, deleteAllTasks}}
    >
      {children}
    </TaskContext.Provider>
  );
};
