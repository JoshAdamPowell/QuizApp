import styled from "styled-components";
import "fonts/fonts.css";

export const MultiChoiceQContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const QuestionAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 500px;
`;

export const StyledQuestionImg = styled.img`
  height: 300px;
  object-fit: contain;
`;

export const QuestionContainer = styled.div`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 150%;
`;
