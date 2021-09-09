import React from "react";
import { Question } from "model/Question";
import { AnswersComp } from "component/AnswersComp";

interface MultiChoiceQProps {
  question: Question;
}

export const MultiChoiceQComp = ({
  question,
}: MultiChoiceQProps): React.ReactElement => (
  <div>
    {question.image && <img src={question.image} />}
    <div>{question.text}</div>
    <AnswersComp answers={question.answers} />
  </div>
);
