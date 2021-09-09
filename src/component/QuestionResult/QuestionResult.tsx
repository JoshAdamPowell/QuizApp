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

export const QuestionResult = (
  props: QuestionResultProps
): React.ReactElement => {
  return (
    <QuestionResultContainer>
      <QuestionResultCard correct={props.correct}>
        <ResultTextWrapper>
          {props.correct ? "Well done!" : "Not quite :("}
        </ResultTextWrapper>
        <ExplanationTextWrapper>{props.explanation}</ExplanationTextWrapper>
      </QuestionResultCard>
    </QuestionResultContainer>
  );
};
