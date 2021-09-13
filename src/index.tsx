import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Quiz } from "model/Quiz";
import { getTestQuiz } from "data/getQuiz";
import { StartScreen } from "component/StartScreen/StartScreen";
import QuizView from "view/QuizView";

const App = (): React.ReactElement => {
  const quiz = getTestQuiz();
  const [started, setStarted] = useState(false);
  return (
    <section>
      {started == false ? (
        <StartScreen
          quizName={quiz.title}
          onStartClick={() => setStarted(true)}
        />
      ) : (
        <QuizView quiz={quiz} />
      )}
    </section>
  );
};

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  quiz: Quiz;
}

ReactDOM.render(<App />, document.getElementById("app"));
