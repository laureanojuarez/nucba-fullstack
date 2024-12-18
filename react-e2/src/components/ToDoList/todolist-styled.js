import styled from "styled-components";

export const ToDoListStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  gap: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    width: 450px;
  }
  @media (max-width: 425px) {
    width: 350px;
  }
`;
