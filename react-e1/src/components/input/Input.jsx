import {Button} from "../button/Button";

export const Input = () => {
  return (
    <>
      <input type="text" placeholder="Que tarea desea agregar?" />
      <Button label={"Agregar"} bgColor="#336bff" />
    </>
  );
};
