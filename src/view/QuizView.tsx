import { MultiChoiceQComp } from "component/MultiChoiceQuestion/MultiChoiceQuestion";
import { ProgressBar } from "component/ProgressBar/ProgressBar";
import { QuestionResult } from "component/QuestionResult/QuestionResult";
import { SubmitButton } from "component/SubmitButton";
import { QuestionState } from "model/QuestionState";
import { Quiz } from "model/Quiz";
import React, { useState } from "react";
import styled from "styled-components";

interface QuizViewProps {
  quiz: Quiz;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

type AnswerSelections = boolean[];

interface QuizData {
  selectedAnswers?: AnswerSelections;
  setSelectedAnswers?: React.Dispatch<React.SetStateAction<AnswerSelections>>;
  questionState?: QuestionState;
}

export const QuizDataContext = React.createContext<QuizData>({});

const QuizView = ({ quiz }: QuizViewProps): React.ReactElement => {
  const quizLength = quiz.questions.length;
  const initialQuestionStates = Array(quizLength).fill(
    QuestionState.UNANSWERED
  );

  const [selectedAnswers, setSelectedAnswers] = useState<AnswerSelections>(
    Array(quizLength).fill(false)
  );

  const [questionStates, setQuestionStates] = useState<QuestionState[]>(
    initialQuestionStates
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const checkAnswer = React.useCallback(() => {
    const correct = !selectedAnswers.some(
      (isSelected, index) =>
        quiz.questions[currentIndex].answers[index].correct !== isSelected
    );

    const newQuestionStates = [...questionStates];
    newQuestionStates[currentIndex] = correct
      ? QuestionState.CORRECT
      : QuestionState.WRONG;
    setQuestionStates(newQuestionStates);
  }, [selectedAnswers, currentIndex]);

  const nextQuestion = React.useCallback(() => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    setSelectedAnswers(
      Array(quiz.questions[nextIndex].answers.length).fill(false)
    );
  }, [currentIndex]);

  return (
    <Container>
      <QuizDataContext.Provider
        value={{
          selectedAnswers: selectedAnswers,
          setSelectedAnswers: setSelectedAnswers,
          questionState: questionStates[currentIndex],
        }}
      >
        <ProgressBar questionStates={questionStates} />
        {currentIndex < quizLength ? (
          <MultiChoiceQComp question={quiz.questions[currentIndex]} />
        ) : (
          <QuestionResult
            explanation={quiz.questions[currentIndex - 1].explanation}
            correct={questionStates[currentIndex - 1] == QuestionState.CORRECT}
          />
        )}
        <SubmitButton
          disabled={!selectedAnswers.some((x) => x)}
          isContinue={
            questionStates[currentIndex] !==
            QuestionState.UNANSWERED /* TODO: Make functional*/
          }
          onSubmit={checkAnswer}
          onContinue={nextQuestion}
        />
      </QuizDataContext.Provider>
    </Container>
  );
};

export default QuizView;
