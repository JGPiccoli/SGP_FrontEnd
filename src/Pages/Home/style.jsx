import styled from "styled-components";

export const Body = styled.div`
  p {
    text-align: left;
  }

  width: 100%;
  padding: 1.5rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 9.5rem;
  margin-top: 8rem;

  @media (min-width: 768px) {
    margin-bottom: 4.3rem;
  }

  @media (min-width: 1024px) {
    margin-top: 4.5rem;
    margin-bottom: 3rem;
  }
`;
export const Button = styled.button`
  width: 30rem;
  max-width: 300px;
  padding: 17px;
  background-color: #03a688;
  color: #0d0d0d;
  border: none;
  font-size: 20px;
  margin-bottom: 3.8rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 8px #3d3d3d;

  &:hover {
    background: #013d32;
  }

  @media (min-width: 768px) {
    max-width: 700px;
    margin: 40px 0;
    padding: 22px;
    font-size: 25px;
  }
`;
