import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  background-color: #fff;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 1px 1px 5px var(--preto-primario);
  overflow: hidden;
  margin-left: 1.4rem;

  @media (min-width: 768px) {
    align-self: center;
    margin-left: 2.6rem;
  }

  @media (min-width: 1024px) {
    margin-left: 10.5rem;
  }
`;
