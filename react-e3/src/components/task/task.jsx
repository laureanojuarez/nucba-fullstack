import { useContext } from "react";
import { TaskItem, TaskSection } from "./task-styled";
// import { Button } from "../button/button";
// import { TaskContext } from "../../context/context-task";

export const Task = () => {
  // const { tasks, deleteTask } = useContext(TaskContext);

  return (
    <>
      <TaskSection>
        {/* {tasks.map((task, index) => (
          <TaskItem key={index}>
            <span>{task}</span>
            <Button label={"Borrar"} onClick={() => deleteTask(index)} />
          </TaskItem>
        ))} */}
      </TaskSection>
    </>
  );
};
