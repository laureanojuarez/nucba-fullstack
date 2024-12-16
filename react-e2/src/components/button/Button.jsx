import {ButtonStyled} from "./button-styled";

export const Button = ({label, $bgColor, $padding, onClick}) => {
  return (
    <ButtonStyled $bgColor={$bgColor} $padding={$padding} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};
