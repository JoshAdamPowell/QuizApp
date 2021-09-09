import React from "react";
import { Quiz } from "model/Quiz";
import styled, { keyframes } from "styled-components";
import { QuestionState } from "model/QuestionState";

interface ProgressDotProps {
  state: QuestionState;
}

const progressDotAnim = (state: QuestionState) => keyframes`
100%{ background-color: ${getFillColor(state)};
    border-color:  ${getBorderColor(state)};
}
`;

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

const ProgressDot = styled.div`
  animation: ${({ state }: ProgressDotProps) => progressDotAnim(state)} 1s
    forwards;
  margin: 2px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 2px solid;
  border-radius: 50%;
`;

interface ProgressBarProps {
  questionStates: QuestionState[];
}

const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProgressBar = ({
  questionStates,
}: ProgressBarProps): React.ReactElement => {
  return (
    <ProgressBarContainer>
      {questionStates.map((state) => (
        <ProgressDot state={state} />
      ))}
    </ProgressBarContainer>
  );
};
