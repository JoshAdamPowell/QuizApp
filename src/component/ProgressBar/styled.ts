import styled, { Keyframes, keyframes } from "styled-components";
import { QuestionState } from "model/QuestionState";
import {
  midGrey,
  darkGrey,
  midGreen,
  darkGreen,
  midRed,
  darkRed,
} from "colours/colours";
import { fadeInPulse } from "shared/animations";

interface ProgressDotProps {
  state: QuestionState;
  index: number;
}

const getBorderColor = (state: QuestionState): string => {
  switch (state) {
    case QuestionState.UNANSWERED:
      return darkGrey;
    case QuestionState.WRONG:
      return darkRed;
    case QuestionState.CORRECT:
      return darkGreen;
  }
};

const getFillColor = (state: QuestionState): string => {
  switch (state) {
    case QuestionState.UNANSWERED:
      return midGrey;
    case QuestionState.WRONG:
      return midRed;
    case QuestionState.CORRECT:
      return midGreen;
  }
};

const progressDotAnim = (state: QuestionState) => keyframes`
  0% {
    background-color: ${getFillColor(QuestionState.UNANSWERED)};
    border-color:  ${getBorderColor(QuestionState.UNANSWERED)};
    opacity: 1;
  }
  100%{ 
    background-color: ${getFillColor(state)};
    border-color:  ${getBorderColor(state)};
    opacity: 1;
  }`;

const duration = 1;
const delay = 0.1;

const getDelay = ({ state, index }: ProgressDotProps): number => {
  if (state === QuestionState.UNANSWERED) {
    return delay * index;
  }
  return 0;
};

export const ProgressDot = styled.div`
  opacity: 0;
  animation: ${fadeInPulse} ${duration}s
      ${(props: ProgressDotProps) => getDelay(props)}s forwards,
    ${({ state }: ProgressDotProps) => progressDotAnim(state)} ${duration}s
      ${(props: ProgressDotProps) => getDelay(props)}s forwards;
  margin: 15px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 2px solid;
  border-radius: 50%;
`;

export const ProgressContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;
