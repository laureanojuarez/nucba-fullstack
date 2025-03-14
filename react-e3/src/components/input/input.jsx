import { DivInput, SectionInput } from "./input-styled";
import { Button } from "../button/button";
// import { useContext } from "react";
// import { TaskContext } from "../../context/context-task";

export const Input = () => {
  // const { addTask, handleInputChange, error } = useContext(TaskContext);

  return (
    <>
      <SectionInput>
        <DivInput>
          <input
            type="text"
            // onChange={handleInputChange}
            placeholder="Que tarea desea agregar?"
          />
          <Button
            label="Agregar"
            bgcolor={"#3364ff"}
            padding="10px 15px"
            // onClick={addTask}
          />
        </DivInput>
      </SectionInput>
    </>
  );
};
