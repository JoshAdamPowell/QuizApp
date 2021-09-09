import styled from "styled-components";
import "css/fonts.css";
import { darkBlue, midBlue, white } from "colours/colours";

export const AnswerContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 120px;
`;

export const AnswerContentItem = styled.div`
  width: 50%;
`;

export const AnswerTextWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 130%;
`;

export const StyledImg = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

export const AnswerButton = styled.button`
  background: ${midBlue};
  border: 2px solid ${darkBlue};
  color: ${white};
  padding: 16px;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${darkBlue};
  }
`;
