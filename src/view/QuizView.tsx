import React, { useState } from "react";
import { Quiz } from "model/Quiz";
import { QuestionState } from "model/QuestionState";
import { ProgressBar } from "view/ProgressBar";
import { MultiChoiceQComp } from "component/MultiChoiceQuestion/MultiChoiceQuestion";

interface QuizViewProps {
  quiz: Quiz;
}

export const QuizView = ({ quiz }: QuizViewProps): React.ReactElement => {
  const quizLength = quiz.questions.length;
  const initialQuestionStates = new Array(quizLength).fill(
    QuestionState.UNANSWERED
  );
  const [questionStates, setQuestionStates] = useState<QuestionState[]>(
    initialQuestionStates
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const updateResult = (correct: boolean): void => {
    if (currentIndex >= quizLength) {
      alert("Quiz complete");
      return;
    }
    let newQuestionStates = [...questionStates];
    newQuestionStates[currentIndex] = correct
      ? QuestionState.CORRECT
      : QuestionState.WRONG;
    setQuestionStates(newQuestionStates);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <ProgressBar questionStates={questionStates} />
      {currentIndex < quizLength ? (
        <>
          <MultiChoiceQComp question={quiz.questions[currentIndex]} />
          <button onClick={() => updateResult(Math.random() < 0.5)}>
            Next Question{" "}
          </button>
        </>
      ) : (
        <h2>Congrats you are done!</h2>
      )}
    </>
  );
};
