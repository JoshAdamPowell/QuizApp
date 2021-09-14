import React, { useCallback, useContext } from "react";
import { Answer } from "model/Answer";
import { QuizDataContext } from "view/QuizView";
import "fonts/fonts.css";
import {
  AnswerButton,
  AnswerContentContainer,
  AnswerContentItem,
  AnswerTextWrapper,
  StyledImg,
} from "./styled";
import { QuestionState } from "model/QuestionState";

interface AnswerCompProps {
  answer: Answer;
  index: number;
}

export const AnswerComp = ({
  answer,
  index,
}: AnswerCompProps): React.ReactElement => {
  const { selectedAnswers, setSelectedAnswers, questionState } =
    useContext(QuizDataContext);

  const updateSelection = useCallback(() => {
    const selections = [...selectedAnswers];
    selections[index] = !selections[index];
    setSelectedAnswers(selections);
  }, [selectedAnswers]);

  const revealed = questionState !== QuestionState.UNANSWERED;

  return (
    <AnswerButton
      index={index}
      revealed={revealed}
      correct={answer.correct}
      selected={selectedAnswers[index]}
      onClick={revealed ? null : updateSelection}
    >
      {answer.text && answer.image ? (
        <AnswerContentContainer>
          <AnswerContentItem>
            <AnswerTextWrapper>{answer.text}</AnswerTextWrapper>
          </AnswerContentItem>
          <AnswerContentItem>
            <StyledImg src={answer.image} />
          </AnswerContentItem>
        </AnswerContentContainer>
      ) : (
        <AnswerContentContainer>
          {answer.text ? (
            <AnswerTextWrapper>{answer.text}</AnswerTextWrapper>
          ) : (
            <StyledImg src={answer.image} />
          )}
        </AnswerContentContainer>
      )}
    </AnswerButton>
  );
};
