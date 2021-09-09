import React from "react";
import {
  ExplanationCard,
  ExplanationContainer,
  MessageTextWrapper,
  ExplanationTextWrapper,
} from "./styled";

interface AnswerExplanationProps {
  explanation: string;
  correct: boolean;
}

export const AnswerExplanation = (
  props: AnswerExplanationProps
): React.ReactElement => {
  return (
    <ExplanationContainer>
      <ExplanationCard correct={props.correct}>
        <MessageTextWrapper>
          {props.correct ? "Well done!" : "Not quite :("}
        </MessageTextWrapper>
        <ExplanationTextWrapper>{props.explanation}</ExplanationTextWrapper>
      </ExplanationCard>
    </ExplanationContainer>
  );
};
