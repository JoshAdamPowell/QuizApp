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
            image:
              "https://s.abcnews.com/images/Sports/mike-tyson-show-gty-jt-200723_1595524132347_hpEmbed_3x2_992.jpg",
          },
          {
            text: "Muhammad Ali, formerly known as Cassius Marcellus Clay Jr.",
            correct: true,
            image:
              "https://upload.wikimedia.org/wikipedia/commons/8/89/Muhammad_Ali_NYWTS.jpg",
          },
          {
            text: "Tiger Woods and a very long woooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooord",
            correct: false,
            image:
              "https://cdn.cnn.com/cnnnext/dam/assets/210223150836-06-tiger-woods-lead-image.jpg",
          },
          {
            text: "Thierry Henry",
            correct: false,
            image: "https://404.com/this-will-not-be-found.jpg",
          },
        ],
        explanation: "It was Tyson and Ali",
      },
      {
        text: "In the 2000 dark comedy film, American Psycho, which of the VP's at Pierce & Pierce has the best business card",
        questionType: QuestionType.single,
        image: "http://i.imgur.com/nVU8Z7R.jpg",
        answers: [
          {
            text: "David Van Patten",
            correct: false,
          },
          {
            text: "Timothy Bryce",
            correct: false,
          },
          {
            text: "Paul Allen",
            correct: true,
          },
          {
            text: "Patrick Bateman",
            correct: false,
          },
        ],
        explanation: "It was Tyson and Ali",
      },
      {
        text: "What actor said this: 'My name is Maximus Decimus Meridius, commander of the Armies of the North, General of the Felix Legions and loyal servant to the true emperor, Marcus Aurelius. Father to a murdered son. Husband to a murdered wife. And I will have my vengeance, in this life or the next.' and also this 'Who is this man? What sort of devil is he To have me caught in a trap And choose to let me go free? It was his hour at last To put a seal on my fate Wipe out the past And watch me clean off the slate All it would take Was a flick of his knife. Vengeance was his And he gave me back my life!'",
        questionType: QuestionType.single,
        image:
          "https://image.shutterstock.com/image-vector/theatre-mask-icon-silhouette-drama-260nw-1939041568.jpg",
        answers: [
          {
            text: "Russel Crowe",
            correct: true,
          },
          {
            text: "Matthew McConaughey",
            correct: false,
          },
          {
            text: "Joaquin Phoenix",
            correct: false,
          },
        ],
      },
    ],
  };
}
