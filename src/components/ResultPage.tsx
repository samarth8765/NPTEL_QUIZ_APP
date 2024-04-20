import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Question } from "../data/data";

interface IncorrectAnswers {
  question: Question;
  yourAnswer: string;
  correctAnswer: string;
}

export default function ResultPage(): React.JSX.Element {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { questions, answers } = state as {
    questions: Question[];
    answers: string[];
  };

  const IncorrectAnswers: IncorrectAnswers[] = [];

  let score = 0;

  questions.forEach((question, index) => {
    if (question.answer === answers[index] && answers[index] !== "") {
      score++;
    } else {
      IncorrectAnswers.push({
        question: question,
        yourAnswer: answers[index],
        correctAnswer: question.answer,
      });
    }
  });

  return (
    <div>
      <h1>Result Page</h1>
      <p style={{ color: "red" }}>Your score : {score}</p>

      <p style={{ color: "red" }}>Incorrect : {120 - score}</p>
      {score !== questions.length ? (
        <div>
          {IncorrectAnswers.map((item, index) => (
            <div>
              <p>
                <b>
                  ({index + 1}) {item.question.question}
                </b>
              </p>
              Options:
              {item.question.options.map((item, index) => (
                <div>
                  <p>
                    ({index + 1}) {item}
                  </p>
                </div>
              ))}
              <p>
                <b> Your Answer : {item.yourAnswer}</b>
              </p>
              <p>
                <b>Correct answer : {item.correctAnswer}</b>
              </p>
            </div>
          ))}
        </div>
      ) : null}
      <button onClick={() => navigate("/")}>Return Home</button>
    </div>
  );
}
