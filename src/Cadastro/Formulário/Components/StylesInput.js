import styled from "styled-components";
import responsivo, { breakpoints } from "../../../Responsivo/MediaQuery";
export const LabelInput = styled.label`
  font-size: 1.2rem;
  color: #304644;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const InputComponent = styled.input`
  border-radius: 20px;
  border: 2px solid #304644;
  padding: 1rem;
  font-size: 0.8rem;
  background-color: transparent;
  &:active {
    border: 2px solid black;
  }
  &.grande {
    width: 100%;
    min-width: 320px;
  }
  &.pequeno {
    width: 200px;
    ${responsivo(breakpoints.tablet)} {
      width: 150px;
    }
    ${responsivo(breakpoints.mobile)} {
      width: 100px;
    }
  }
`;
