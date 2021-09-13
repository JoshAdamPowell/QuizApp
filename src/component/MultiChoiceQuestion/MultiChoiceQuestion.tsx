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
}

export const MultiChoiceQComp = ({
  question,
  showSummary,
}: MultiChoiceQProps): React.ReactElement => {
  const { questionState } = useContext(QuizDataContext);

  return (
    <MultiChoiceQContainer>
      <QuestionAndImageContainer>
        {question.image && <StyledQuestionImg src={question.image} />}
        <QuestionContainer>{question.text}</QuestionContainer>
      </QuestionAndImageContainer>
      {showSummary ? (
        <QuestionResult
          explanation={question.explanation}
          correct={questionState === QuestionState.CORRECT}
        />
      ) : (
        <AnswersComp answers={question.answers} />
      )}
    </MultiChoiceQContainer>
  );
};
