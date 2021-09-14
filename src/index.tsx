import ReactDOM from "react-dom";
import React from "react";
import { Quiz } from "model/Quiz";
import { getTestQuiz } from "data/getQuiz";
import QuizView from "view/QuizView";
import { shuffle } from "shared/utils";

const App = (): React.ReactElement => {
  const quiz = getTestQuiz();
  quiz.questions = quiz.questions.map((q) => {
    q.answers = shuffle(q.answers);
    return q;
  }); // shuffle answers within each question
  quiz.questions = shuffle(quiz.questions); // shuffled order of questions
  return (
    <section>
      <QuizView quiz={quiz} />
    </section>
  );
};

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  quiz: Quiz;
}

ReactDOM.render(<App />, document.getElementById("app"));
