import ChildSwitcherContainer from "component/ChildSwitcherContainer";
import { MultiChoiceQComp } from "component/MultiChoiceQuestion/MultiChoiceQuestion";
import { ProgressBar } from "component/ProgressBar/ProgressBar";
import { StartScreen } from "component/StartScreen/StartScreen";
import { SubmitButton } from "component/SubmitButton";
import { QuestionType } from "model/Question";
import { QuestionState } from "model/QuestionState";
import { Quiz } from "model/Quiz";
import React, { useState } from "react";
import { QuizContainer } from "./styled";
import { EndPage } from "component/EndPage/EndPage";

interface QuizViewProps {
  quiz: Quiz;
}

type AnswerSelections = boolean[];

interface QuizData {
  selectedAnswers?: AnswerSelections;
  setSelectedAnswers?: React.Dispatch<React.SetStateAction<AnswerSelections>>;
  questionState?: QuestionState;
  questionType?: QuestionType;
}

export const QuizDataContext = React.createContext<QuizData>({});

const QuizView = ({ quiz }: QuizViewProps): React.ReactElement => {
  const quizLength = quiz.questions.length;
  const initialQuestionStates = Array(quizLength).fill(
    QuestionState.UNANSWERED
  );

  const [selectedAnswers, setSelectedAnswers] = useState<AnswerSelections>(
    Array(quiz.questions[0] && quiz.questions[0].answers.length).fill(false)
  );

  const [questionStates, setQuestionStates] = useState<QuestionState[]>(
    initialQuestionStates
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const checkAnswer = React.useCallback(() => {
    const correct =
      quiz.questions[currentIndex].questionType === QuestionType.multiAnd
        ? selectedAnswers.every(
            (isSelected, index) =>
              quiz.questions[currentIndex].answers[index].correct === isSelected
          )
        : selectedAnswers.some(
            (isSelected, index) =>
              quiz.questions[currentIndex].answers[index].correct && isSelected
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
    }
  }, [currentIndex]);

  const [currentScreen, setCurrentScreen] = useState(0);

  return (
    <QuizContainer>
      <QuizDataContext.Provider
        value={{
          selectedAnswers: selectedAnswers,
          setSelectedAnswers: setSelectedAnswers,
          questionState: questionStates[currentIndex],
          questionType: quiz.questions[currentIndex].questionType,
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
              questionIndex={currentIndex}
              question={quiz.questions[currentIndex]}
            />
            <SubmitButton
              disabled={!selectedAnswers.some((x) => x)}
              isContinue={
                questionStates[currentIndex] !== QuestionState.UNANSWERED
              }
              onSubmit={checkAnswer}
              onContinue={
                showSummary ? nextQuestion : () => setShowSummary(true)
              }
            />
          </>

          <EndPage
            questionStates={questionStates}
            onRestartClick={() => {
              setCurrentScreen(0);
              setQuestionStates(questionStates.fill(QuestionState.UNANSWERED));
            }}
          />
        </ChildSwitcherContainer>
      </QuizDataContext.Provider>
    </QuizContainer>
  );
};

export default QuizView;
