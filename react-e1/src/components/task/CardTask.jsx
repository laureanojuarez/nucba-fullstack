import {Button} from "../button/Button";
import {CardTaskDiv} from "./taks-styles";

const Task = ({desc}) => {
  return (
    <CardTaskDiv>
      <p>{desc}</p>
      <Button label={"Borrar"} padding="5px 10px" />
    </CardTaskDiv>
  );
};

export const ComponentTask = () => {
  return (
    <>
      <Task desc="Tarea 1" />
      <hr />
      <Task desc="Tarea 2" />
    </>
  );
};
