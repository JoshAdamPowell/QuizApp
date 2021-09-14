import ReactDOM from "react-dom";
import React from "react";
import { Quiz } from "model/Quiz";
import { getTestQuiz } from "data/getQuiz";
import QuizView from "view/QuizView";

const App = (): React.ReactElement => {
  const quiz = getTestQuiz();
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
