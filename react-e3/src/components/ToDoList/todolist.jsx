import { ToDoListStyled } from "./todolist-styled";
import { Button } from "../button/button";
import { AddTask } from "../../features/Task/Task";

export const ToDoList = () => {
  return (
    <ToDoListStyled>
      <h1>Nucstacks</h1>
      <AddTask />
    </ToDoListStyled>
  );
};
