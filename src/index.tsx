import ReactDOM from "react-dom";
import React from "react";
import { Quiz } from "model/Quiz";
import { getTestQuiz } from "data/getQuiz";
import { StartScreen } from "component/StartScreen/StartScreen";

const App = () => {
  const quiz = getTestQuiz();
  return (
    <section>
      <h1>This is my React app!</h1>
      <StartScreen
        quizName={quiz.title}
        onStartClick={() => console.log("starting")}
      />
    </section>
  );
};

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  quiz: Quiz;
}

ReactDOM.render(<App />, document.getElementById("app"));
