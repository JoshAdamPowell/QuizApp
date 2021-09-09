import styled, { keyframes } from "styled-components";
import { QuestionState } from "model/QuestionState";
import {
  midGrey,
  darkGrey,
  midGreen,
  darkGreen,
  midRed,
  darkRed,
} from "colours/colours";

interface ProgressDotProps {
  state: QuestionState;
}

const progressDotAnim = (state: QuestionState) => keyframes`
  100%{ background-color: ${getFillColor(state)};
      border-color:  ${getBorderColor(state)};
  }`;

const getBorderColor = (state: QuestionState) => {
  switch (state) {
    case QuestionState.UNANSWERED:
      return darkGrey;
    case QuestionState.WRONG:
      return darkRed;
    case QuestionState.CORRECT:
      return darkGreen;
  }
};

const getFillColor = (state: QuestionState) => {
  switch (state) {
    case QuestionState.UNANSWERED:
      return midGrey;
    case QuestionState.WRONG:
      return midRed;
    case QuestionState.CORRECT:
      return midGreen;
  }
};

export const ProgressDot = styled.div`
  animation: ${({ state }: ProgressDotProps) => progressDotAnim(state)} 1s
    forwards;
  margin: 2px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 2px solid ${getBorderColor(QuestionState.UNANSWERED)};
  border-radius: 50%;
  background-color: ${getFillColor(QuestionState.UNANSWERED)};
`;
