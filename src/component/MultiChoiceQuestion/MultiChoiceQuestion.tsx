import React from "react";
import { Question } from "model/Question";
import { AnswersComp } from "component/AnswerGrid/AnswersGrid";
import {
  MultiChoiceQContainer,
  QuestionAndImageContainer,
  QuestionContainer,
  StyledQuestionImg,
} from "./styled";

interface MultiChoiceQProps {
  question: Question;
}

export const MultiChoiceQComp = ({
  question,
}: MultiChoiceQProps): React.ReactElement => (
  <MultiChoiceQContainer>
    <QuestionAndImageContainer>
      {question.image && <StyledQuestionImg src={question.image} />}
      <QuestionContainer>{question.text}</QuestionContainer>
    </QuestionAndImageContainer>
    <AnswersComp answers={question.answers} />
  </MultiChoiceQContainer>
);
