import {ContainerSectionPadre} from "../../styles/containerSectionPadre";
import {Button} from "../button/Button";
import {Input} from "../input/Input";
import {ContainerInput} from "../input/input-styles";
import {ComponentTask} from "../task/CardTask";
import {ContainerTask} from "../task/taks-styles";

export const ContainerSection = () => {
  return (
    <>
      <ContainerSectionPadre>
        <h1>Nuctaks</h1>
        <ContainerInput>
          <Input />
        </ContainerInput>

        <ContainerTask>
          <ComponentTask />
        </ContainerTask>
        <Button>Borrar todas</Button>
      </ContainerSectionPadre>
    </>
  );
};
