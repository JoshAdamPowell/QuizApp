import styled from "styled-components";
import { midGreen, darkGreen, midRed, darkRed, white } from "colours/colours";
import "fonts/fonts.css";

interface ResultProps {
  correct: boolean;
}

export const QuestionResultContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

export const QuestionResultCard = styled.div`
  background: ${({ correct }: ResultProps) => (correct ? midGreen : midRed)};
  border: 2px solid
    ${({ correct }: ResultProps) => (correct ? darkGreen : darkRed)};
  color: ${white};
  border-radius: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 16px;
  height: 120px;
`;

export const ResultTextWrapper = styled.div`
  font-family: Riangriung;
  font-size: 260%;
`;

export const ExplanationTextWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 130%;
`;
