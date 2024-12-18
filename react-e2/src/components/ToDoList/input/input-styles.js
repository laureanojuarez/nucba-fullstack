import styled from "styled-components";

export const SectionInput = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  & input {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }

  & p {
    color: red;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    & input {
      padding: 10px;
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
