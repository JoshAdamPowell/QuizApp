import React from "react";
import { QuestionState } from "model/QuestionState";
import { ProgressDot, ProgressContainer } from "./styled";

interface ProgressBarProps {
  questionStates: QuestionState[];
}

export const ProgressBar = ({
  questionStates,
}: ProgressBarProps): React.ReactElement => (
  <ProgressContainer>
    {questionStates.map((state, index) => (
      <ProgressDot
        state={state}
        index={index}
        key={`${index}-${state.valueOf()}`}
      />
    ))}
  </ProgressContainer>
);
