import { ButtonStyled } from "./button-styled";

export const Button = ({
  label,
  bgcolor = "#ff334f",
  padding = "5px 10px",
  onClick,
  width,
}) => {
  return (
    <ButtonStyled
      bgcolor={bgcolor}
      padding={padding}
      onClick={onClick}
      width={width}
    >
      {label}
    </ButtonStyled>
  );
};
