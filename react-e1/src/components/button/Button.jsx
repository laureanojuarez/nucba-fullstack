import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: ${(props) => props.padding || "10px 20px"};
  color: white;
  background-color: ${({bgColor}) => bgColor || "#ff334f"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Button = ({label, bgColor, padding}) => {
  return (
    <ButtonStyled bgColor={bgColor} padding={padding}>
      {label}
    </ButtonStyled>
  );
};
