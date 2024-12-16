import {Button} from "../button/Button";
import {DivTask, TaskContainer} from "./task-styled";

export const Task = ({tasks = [], deleteTask, clearTask}) => {
  return (
    <TaskContainer>
      {tasks.map((task, index) => (
        <DivTask key={index}>
          <p>{task}</p>
          <Button
            label="Borrar"
            $padding="5px 10px"
            onClick={() => deleteTask(index)}
          />
        </DivTask>
      ))}
      {tasks.length > 0 && (
        <Button label={"Borrar todas"} onClick={clearTask} />
      )}
    </TaskContainer>
  );
};
