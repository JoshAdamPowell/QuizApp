import React from "react";
import { Quiz } from "model/Quiz";
import { QuestionState } from "model/QuestionState";
import { ProgressBar } from "view/ProgressBar";

interface QuizViewProps {
  quiz: Quiz;
}

export const QuizView = ({ quiz }: QuizViewProps): React.ReactElement => {
  return (
    <p>
      <ProgressBar
        questionStates={[
          QuestionState.WRONG,
          QuestionState.CORRECT,
          QuestionState.UNANSWERED,
        ]}
      />

      {JSON.stringify(quiz)}
    </p>
  );
};
