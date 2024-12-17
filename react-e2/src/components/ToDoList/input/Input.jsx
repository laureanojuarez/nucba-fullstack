import {useContext} from "react";
import {Button} from "../button/Button";
import {TaskContext} from "../../../context/ContextTask";
import {SectionInput} from "./input-styles";

export const Input = () => {
  const {addTask, handleInputChange} = useContext(TaskContext);

  return (
    <>
      <SectionInput>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Que tarea desea agregar?"
        />
        <Button
          label="Agregar"
          bgcolor={"blue"}
          padding="10px 15px"
          onClick={addTask}
        />
      </SectionInput>
    </>
  );
};
