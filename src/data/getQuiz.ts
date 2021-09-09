import { Quiz } from "model/Quiz";
import { QuestionType } from "model/Question";

export function getTestQuiz(): Quiz {
  return {
    title: "Test Quiz",
    questions: [
      {
        text: "What's 9 + 10?",
        image:
          "https://tuntimo.com/wp-content/uploads/2020/10/biotechnology.svg",
        questionType: QuestionType.single,
        answers: [
          {
            text: "17",
            correct: false,
          },
          {
            text: "19",
            correct: true,
          },
          {
            text: "21",
            correct: false,
          },
          {
            text: "23",
            correct: false,
          },
        ],
        explanation: "Because 10 + 9 = 19",
      },
      {
        text: "Who was born first?",
        questionType: QuestionType.single,
        answers: [
          {
            text: "Martin Luther King Jr.",
            image:
              "https://tuntimo.com/wp-content/uploads/2020/08/Martin-Luther-King-Junior-1-768x1024.png",
            correct: false,
          },
          {
            text: "Malcolm X",
            image:
              "https://tuntimo.com/wp-content/uploads/2020/10/Malcolm-768x1024.png",
            correct: true,
          },
        ],
        explanation:
          "Malcolm X was born in 1925, 4 years earlier than MLK in 1929",
      },
      {
        text: "Which of the following are species of duck? (Pick just one)",
        questionType: QuestionType.multiOr,
        answers: [
          {
            text: "Mallard",
            correct: true,
          },
          {
            text: "Alabio",
            correct: true,
          },
          {
            text: "Rubber",
            correct: false,
          },
          {
            text: "Canada",
            correct: false,
          },
        ],
        explanation:
          "Canada is a species of goose and rubber ducks though common are not considered alive. That said, the largest rubber duck in the world has been to Canada and measures 49ft tall.",
      },
      {
        text: "Pick all the boxers",
        questionType: QuestionType.multiAnd,
        answers: [
          {
            text: "Mike Tyson",
            correct: true,
          },
          {
            text: "Muhammad Ali",
            correct: true,
          },
          {
            text: "Tiger Woods",
            correct: false,
          },
          {
            text: "Thierry Henry",
            correct: false,
          },
        ],
        explanation: "It was Tyson and Ali",
      },
    ],
  };
}
