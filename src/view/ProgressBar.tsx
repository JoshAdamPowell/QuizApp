import React from "react";
import { QuestionState } from "model/QuestionState";
import { ProgressDot } from "component/ProgressDot";
import { ProgressContainer } from "component/ProgressContainer";

interface ProgressBarProps {
  questionStates: QuestionState[];
}

export const ProgressBar = ({
  questionStates,
}: ProgressBarProps): React.ReactElement => {
  return (
    <ProgressContainer>
      {questionStates.map((state, key) => (
        <ProgressDot state={state} key={key} />
      ))}
    </ProgressContainer>
  );
};
