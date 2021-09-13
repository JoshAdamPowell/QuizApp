import React from "react";
import { Answer } from "model/Answer";
import { AnswerComp } from "component/AnswerButton/AnswerButton";
import { AnswersContainer } from "./styled";

interface AnswersCompProps {
  answers: Answer[];
}

export const AnswersComp = ({
  answers,
}: AnswersCompProps): React.ReactElement => (
  <AnswersContainer>
    {answers.map((answer, index) => (
      <AnswerComp answer={answer} index={index} key={index} />
    ))}
  </AnswersContainer>
);
