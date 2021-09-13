import ChildSwitcherContainer from "component/ChildSwitcherContainer";
import { MultiChoiceQComp } from "component/MultiChoiceQuestion/MultiChoiceQuestion";
import { ProgressBar } from "component/ProgressBar/ProgressBar";
import { QuestionResult } from "component/QuestionResult/QuestionResult";
import { StartScreen } from "component/StartScreen/StartScreen";
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

  const [showSummary, setShowSummary] = useState(false);

  const nextQuestion = React.useCallback(() => {
    const nextIndex = currentIndex + 1 >= quizLength ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    setSelectedAnswers(
      Array(quiz.questions[nextIndex].answers.length).fill(false)
    );
    setShowSummary(false);
    if (nextIndex === 0) {
      setCurrentScreen(2);
      setQuestionStates(questionStates.fill(QuestionState.UNANSWERED));
    }
  }, [currentIndex]);

  const [currentScreen, setCurrentScreen] = useState(0);

  return (
    <Container>
      <QuizDataContext.Provider
        value={{
          selectedAnswers: selectedAnswers,
          setSelectedAnswers: setSelectedAnswers,
          questionState: questionStates[currentIndex],
        }}
      >
        <ChildSwitcherContainer index={currentScreen}>
          <StartScreen
            quizName={quiz.title}
            onStartClick={() => setCurrentScreen(1)}
          />
          <>
            <ProgressBar questionStates={questionStates} />
            <MultiChoiceQComp
              showSummary={showSummary}
              question={quiz.questions[currentIndex]}
            />
            <SubmitButton
              disabled={!selectedAnswers.some((x) => x)}
              isContinue={
                questionStates[currentIndex] !==
                QuestionState.UNANSWERED /* TODO: Make functional*/
              }
              onSubmit={checkAnswer}
              onContinue={
                showSummary ? nextQuestion : () => setShowSummary(true)
              }
            />
          </>
          <StartScreen
            quizName={"Quiz is over, go home losers"}
            onStartClick={() => setCurrentScreen(0)}
          />
        </ChildSwitcherContainer>
      </QuizDataContext.Provider>
    </Container>
  );
};

export default QuizView;
