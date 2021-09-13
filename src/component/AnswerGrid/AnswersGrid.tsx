import React from "react";
import { Answer } from "model/Answer";
import { AnswerComp } from "component/AnswerButton/AnswerButton";
import { AnswersContainer } from "./styled";
import { shuffle } from "shared/utils";

interface AnswersCompProps {
  answers: Answer[];
}

export const AnswersComp = ({
  answers,
}: AnswersCompProps): React.ReactElement => {
  const shuffledAnswers = shuffle(answers);
  const randomIndices = shuffle(Array.from(answers.keys()));
  return (
    <AnswersContainer>
      {shuffledAnswers.map((answer, index) => (
        <AnswerComp
          answer={answer}
          key={index + answer.text + answer.image}
          index={randomIndices[index]}
        />
      ))}
    </AnswersContainer>
  );
};
