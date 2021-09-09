import styled, { keyframes } from "styled-components";
import { QuestionState } from "model/QuestionState";

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
      return "#aeadad";
    case QuestionState.WRONG:
      return "#c11818";
    case QuestionState.CORRECT:
      return "#2e9937";
  }
};

const getFillColor = (state: QuestionState) => {
  switch (state) {
    case QuestionState.UNANSWERED:
      return "#eeeded";
    case QuestionState.WRONG:
      return "#de2d2c";
    case QuestionState.CORRECT:
      return "#4caf4c";
  }
};

export const ProgressDot = styled.div`
  animation: ${({ state }: ProgressDotProps) => progressDotAnim(state)} 1s
    forwards;
  margin: 2px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 2px solid #aeadad;
  border-radius: 50%;
  background-color: #eeeded;
`;
