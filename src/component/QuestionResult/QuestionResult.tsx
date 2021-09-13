import React from "react";
import {
  QuestionResultCard,
  QuestionResultContainer,
  ResultTextWrapper,
  ExplanationTextWrapper,
} from "./styled";

interface QuestionResultProps {
  explanation: string;
  correct: boolean;
}

export const QuestionResult = ({
  explanation,
  correct,
}: QuestionResultProps): React.ReactElement => {
  return (
    <QuestionResultContainer>
      <QuestionResultCard correct={correct}>
        <ResultTextWrapper>
          {correct ? "Well done!" : "Not quite :("}
        </ResultTextWrapper>
        <ExplanationTextWrapper>{explanation}</ExplanationTextWrapper>
      </QuestionResultCard>
    </QuestionResultContainer>
  );
};
