import {Button} from "../button/Button";
import {DivInput, InputStyled} from "./input-styles";
import {Task} from "../task/Task";
import {useContext} from "react";
import {Contexto} from "../../context/myContext";

export const Input = () => {
  const {tasks, task, error, setTask, addTask, deleteTask, clearTasks} =
    useContext(Contexto);

  return (
    <>
      <DivInput>
        <InputStyled
          placeholder="Que tarea desea agregar?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button label={"Agregar"} $bgColor={"#3364ff"} onClick={addTask} />
      </DivInput>
      {error && <p style={{color: "red"}}>{error}</p>}
      <Task tasks={tasks} deleteTask={deleteTask} clearTasks={clearTasks} />
    </>
  );
};
