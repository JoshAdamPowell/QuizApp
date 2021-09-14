import React from "react";
import { Answer } from "model/Answer";
import { AnswerComp } from "component/AnswerButton/AnswerButton";
import { AnswersContainer } from "./styled";

interface AnswersCompProps {
  answers: Answer[];
  questionIndex: number;
}

export const AnswersComp = ({
  questionIndex,
  answers,
}: AnswersCompProps): React.ReactElement => (
  <AnswersContainer>
    {answers.map((answer, answerIndex) => (
      <AnswerComp
        answer={answer}
        key={`answer-${questionIndex}-${answerIndex}`} // TODO: make reveal state part of key
        index={answerIndex}
      />
    ))}
  </AnswersContainer>
);
