import ChildSwitcherContainer from "component/ChildSwitcherContainer";
import { MultiChoiceQComp } from "component/MultiChoiceQuestion/MultiChoiceQuestion";
<<<<<<< HEAD
import { ProgressBar } from "component/ProgressBar/ProgressBar";
import { StartScreen } from "component/StartScreen/StartScreen";
import { SubmitButton } from "component/SubmitButton";
import { QuestionState } from "model/QuestionState";
import { Quiz } from "model/Quiz";
import React, { useState } from "react";
import { QuizContainer } from "./styled";
=======
import { QuestionResult } from "component/QuestionResult/QuestionResult";
import { EndPage } from "component/EndPage/EndPage";
>>>>>>> daef062 (basic layout of finish page and alternating colours on congratulations)

interface QuizViewProps {
  quiz: Quiz;
}

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
    Array(quiz.questions[0] && quiz.questions[0].answers.length).fill(false)
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
    }
  }, [currentIndex]);

  const [currentScreen, setCurrentScreen] = useState(0);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <QuizContainer>
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
              questionIndex={currentIndex}
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
            onStartClick={() => {
              setCurrentScreen(0);
              setQuestionStates(questionStates.fill(QuestionState.UNANSWERED));
            }}
          />
        </ChildSwitcherContainer>
      </QuizDataContext.Provider>
    </QuizContainer>
=======
=======
>>>>>>> da0bdb6 (added score functionality)
=======
>>>>>>> 7409b1c (added button for try again)
    <>
      {<ProgressBar questionStates={questionStates} />}
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
    </>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> daef062 (basic layout of finish page and alternating colours on congratulations)
=======
=======
    // <>
    //   <ProgressBar questionStates={questionStates} />
    //   {currentIndex < quizLength ? (
    //     <>
    //       <MultiChoiceQComp question={quiz.questions[currentIndex]} />
    //       <button onClick={() => updateResult(Math.random() < 0.5)}>
    //         Next Question
    //       </button>
    //     </>
    //   ) : (
    <EndPage questionStates={questionStates} />
    //  )}
    // </>
>>>>>>> e5ea511 (added score functionality)
>>>>>>> da0bdb6 (added score functionality)
=======
>>>>>>> 7409b1c (added button for try again)
  );
};

export default QuizView;
