import {Button} from "../button/Button";
import {DivTask, TaskContainer} from "./task-styled";

export const Task = () => {
  return (
    <TaskContainer>
      <DivTask>
        <p>Tarea 1</p>
        <Button label="Borrar" $padding="5px 10px" />
      </DivTask>
      <hr />
      <DivTask>
        <p>Tarea 2</p>
        <Button label="Borrar" $padding="5px 10px" />
      </DivTask>
      <Button label={"Borrar todas"} />
    </TaskContainer>
  );
};
