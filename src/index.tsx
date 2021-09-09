import ReactDOM from "react-dom";
import React from "react";
import { Quiz } from "model/Quiz";
import { getTestQuiz } from "data/getQuiz";
import { QuizView } from "view/QuizView";
import { MultiChoiceQComp } from "component/MultiChoiceQuestion/MultiChoiceQuestion";

const App = () => {
  const quiz = getTestQuiz();
  return (
    <section>
      <h1>This is my React app!</h1>
      <MultiChoiceQComp question={quiz.questions[0]} />
    </section>
  );
};

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  quiz: Quiz;
}

ReactDOM.render(<App />, document.getElementById("app"));
