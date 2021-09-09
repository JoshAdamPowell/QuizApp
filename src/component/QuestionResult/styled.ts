import styled, { keyframes } from "styled-components";
import { midGreen, darkGreen, midRed, darkRed, white } from "colours/colours";
import "fonts/fonts.css";

interface ResultProps {
  correct: boolean;
}

export const pulseAnimation = () => keyframes`
	0% {
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	50% {
		transform: scale(1.10);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}`;

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
  border: 2px red;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 16px;
  height: 120px;
  transform: scale(1);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  animation: ${pulseAnimation} 1.5s 1;
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
