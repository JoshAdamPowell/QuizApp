import styled from "styled-components";
import { midGreen, darkGreen, midRed, darkRed, white } from "colours/colours";
import { fadeInPulse } from "shared/animations";
import "fonts/fonts.css";

interface ResultProps {
  correct: boolean;
}

export const QuestionResultContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2vw;
`;

export const QuestionResultCard = styled.div`
  background: ${({ correct }: ResultProps) => (correct ? midGreen : midRed)};
  border: 4px solid
    ${({ correct }: ResultProps) => (correct ? darkGreen : darkRed)};
  color: ${white};
  border-radius: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 16px;
  min-height: 120px;
  transform: scale(1);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  animation: ${fadeInPulse} 1.5s 1;
  animation-fill=mode: forwards;
`;

export const ResultTextWrapper = styled.div`
  font-family: Riangriung;
  font-size: 40px;
`;

export const ExplanationTextWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 130%;
`;
