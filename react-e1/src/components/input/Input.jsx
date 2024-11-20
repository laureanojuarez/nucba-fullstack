import styled from "styled-components";
import {Button} from "../button/Button";

export const DivInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  gap: 10px;
`;
export const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  padding: 0px 10px;
`;
export const Input = () => {
  return (
    <DivInput>
      <InputStyled placeholder="Que desea agregar?" />
      <Button label={"Agregar"} $bgColor={"#3364ff"} />
    </DivInput>
  );
};
