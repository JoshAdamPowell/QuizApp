import React, { useState } from "react";
import styled from "styled-components";
import { Quiz } from "model/Quiz";
import { QuestionState } from "model/QuestionState";
import { ProgressBar } from "component/ProgressBar/ProgressBar";
import { MultiChoiceQComp } from "component/MultiChoiceQuestion/MultiChoiceQuestion";
import { QuestionResult } from "component/QuestionResult/QuestionResult";
import { SubmitButton } from "component/SubmitButton";

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
  selectedQuestions?: AnswerSelections;
  setSelectedQuestions?: React.Dispatch<React.SetStateAction<AnswerSelections>>;
}

export const QuizDataContext = React.createContext<QuizData>({
  selectedQuestions: [],
  setSelectedQuestions: null,
});

const QuizView = ({ quiz }: QuizViewProps): React.ReactElement => {
  const quizLength = quiz.questions.length;
  const initialQuestionStates = Array(quizLength).fill(
    QuestionState.UNANSWERED
  );

  const [selectedAnswers, setSelectedAnswers] = useState<AnswerSelections>(
    Array(quizLength)
  );

  const [questionStates, setQuestionStates] = useState<QuestionState[]>(
    initialQuestionStates
  );

  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const updateResult = (correct: boolean): void => {
    if (currentIndex >= quizLength) {
      alert("Quiz complete");
      return;
    }
    const newQuestionStates = [...questionStates];
    newQuestionStates[currentIndex] = correct
      ? QuestionState.CORRECT
      : QuestionState.WRONG;
    setQuestionStates(newQuestionStates);
    setCurrentIndex(currentIndex + 1);
  };

  console.log(selectedAnswers);

  return (
    <Container>
      <QuizDataContext.Provider
        value={{
          selectedQuestions: selectedAnswers,
          setSelectedQuestions: setSelectedAnswers,
        }}
      >
        <ProgressBar questionStates={questionStates} />
        {currentIndex < quizLength ? (
          <>
            <button onClick={() => updateResult(Math.random() < 0.5)}>
              Next Question
            </button>
            <MultiChoiceQComp question={quiz.questions[currentIndex]} />
          </>
        ) : (
          <QuestionResult
            explanation={quiz.questions[currentIndex - 1].explanation}
            correct={questionStates[currentIndex - 1] == QuestionState.CORRECT}
          />
        )}
        <SubmitButton
          disabled={!selectedAnswers.some((x) => x)}
          isContinue={false /* TODO: Make functional*/}
        />
      </QuizDataContext.Provider>
    </Container>
  );
};

export default QuizView;
