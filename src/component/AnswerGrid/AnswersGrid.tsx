import React from "react";
import { Answer } from "model/Answer";
import { AnswerComp } from "component/AnswerButton/AnswerButton";
import { AnswersContainer } from "./styled";

interface AnswersCompProps {
  answers: Answer[];
}

const shuffle = <T extends unknown>(arr: T[]): T[] => {
  const randomNumbers = Array.from({ length: arr.length }, () => Math.random());
  const randomIndices = randomNumbers
    .map((v, i) => [v, i])
    .sort()
    .map((a) => a[1]);
  return randomIndices.map((v) => arr[v]);
};

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
