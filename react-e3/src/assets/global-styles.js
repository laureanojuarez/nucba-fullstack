import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color:#242424;
}
`;

export const MainStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
