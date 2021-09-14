import React, { useContext } from "react";
import { Question } from "model/Question";
import { AnswersComp } from "component/AnswerGrid/AnswersGrid";
import {
  MultiChoiceQContainer,
  QuestionAndImageContainer,
  QuestionContainer,
  StyledQuestionImg,
} from "./styled";
import { QuestionResult } from "component/QuestionResult/QuestionResult";
import { QuizDataContext } from "view/QuizView";
import { QuestionState } from "model/QuestionState";

interface MultiChoiceQProps {
  question: Question;
  showSummary: boolean;
  questionIndex: number;
}

export const MultiChoiceQComp = ({
  question,
  questionIndex,
}: MultiChoiceQProps): React.ReactElement => (
  <MultiChoiceQContainer>
    <QuestionAndImageContainer>
      {question.image && <StyledQuestionImg src={question.image} />}
      <QuestionContainer>{question.text}</QuestionContainer>
    </QuestionAndImageContainer>
    <AnswersComp questionIndex={questionIndex} answers={question.answers} />
  </MultiChoiceQContainer>
);
