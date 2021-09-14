import React from "react";
import { Answer } from "model/Answer";
import { AnswerComp } from "component/AnswerButton/AnswerButton";
import { AnswersContainer } from "./styled";
import { shuffle } from "shared/utils";

interface AnswersCompProps {
  answers: Answer[];
  questionIndex: number;
}

export const AnswersComp = ({
  questionIndex,
  answers,
}: AnswersCompProps): React.ReactElement => {
  const shuffledAnswers = shuffle(answers);
  const randomIndices = shuffle(Array.from(answers.keys()));
  return (
    <AnswersContainer>
      {shuffledAnswers.map((answer, answerIndex) => (
        <AnswerComp
          answer={answer}
          key={`answer-${questionIndex}-${answerIndex}`} // TODO: make reveal state part of key
          index={randomIndices[answerIndex]}
        />
      ))}
    </AnswersContainer>
  );
};
