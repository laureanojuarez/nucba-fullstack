import styled from "styled-components";

export const SectionInput = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
  & input {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 0px 10px;
  }

  @media (max-width: 768px) {
    & input {
      padding: 10px;
    }

    flex-direction: column;
  }
`;
