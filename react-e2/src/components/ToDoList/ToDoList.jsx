import React, {useContext} from "react";
import {Input} from "./input/Input";
import {Task} from "./task/Task";
import {ToDoListStyled} from "./todolist-styled";
import {Button} from "./button/Button";
import {TaskContext} from "../../context/ContextTask";

export const ToDoList = () => {
  const {deleteAllTasks} = useContext(TaskContext);

  return (
    <>
      <ToDoListStyled>
        <h1>Nucstacks</h1>
        <Input />
        <Task />
        <Button
          label={"Borrar todos"}
          width="100%"
          padding="10px"
          onClick={deleteAllTasks}
        />
      </ToDoListStyled>
    </>
  );
};
