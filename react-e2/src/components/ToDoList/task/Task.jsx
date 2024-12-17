import {useContext} from "react";
import {TaskItem, TaskSection} from "./task-styles";
import {TaskContext} from "../../../context/ContextTask";
import {Button} from "../button/Button";

export const Task = () => {
  const {tasks, deleteTask} = useContext(TaskContext);

  return (
    <>
      <TaskSection>
        {tasks.map((task, index) => (
          <TaskItem key={index}>
            <span>{task}</span>
            <Button label={"Borrar"} onClick={() => deleteTask(index)} />
          </TaskItem>
        ))}
      </TaskSection>
    </>
  );
};
