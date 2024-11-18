import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: ${({padding}) => padding || "10px 20px"};
  color: white;
  background-color: ${({bgColor}) => bgColor || "#ff2551"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Button = ({label, bgColor = "#ff2551", padding = "10px 20px"}) => {
  return (
    <ButtonStyled bgColor={bgColor} padding={padding}>
      {label}
    </ButtonStyled>
  );
};
