import {Button} from "../button/Button";
import {CardTaskDiv} from "./taks-styles";
// import { CardTaskDiv } from "./task-styles";

// Componente para cada tarea
const Task = ({desc}) => {
  return (
    <CardTaskDiv>
      <p>{desc}</p>
      <Button>Borrar</Button>
    </CardTaskDiv>
  );
};

// Componente principal que lista todas las tareas
export const ComponentTask = () => {
  const tasks = [
    {
      id: 1,
      desc: "Tarea 1",
    },
    {
      id: 2,
      desc: "Tarea 2",
    },
  ];

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} desc={task.desc} />
      ))}
    </>
  );
};
