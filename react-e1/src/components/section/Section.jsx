import {Button} from "../button/Button";
import {Input} from "../input/Input";
import {ContainerInput} from "../input/input-styles";
import {ComponentTask} from "../task/CardTask";
import {ContainerTask} from "../task/taks-styles";
import {ContainerSection} from "./containerSection";

export const Section = () => {
  return (
    <>
      <ContainerSection>
        <h1>Nuctaks</h1>
        <ContainerInput>
          <Input />
        </ContainerInput>

        <ContainerTask>
          <ComponentTask />
        </ContainerTask>
        <ContainerTask>
          <Button label={"Borrar todas"} />
        </ContainerTask>
      </ContainerSection>
    </>
  );
};
