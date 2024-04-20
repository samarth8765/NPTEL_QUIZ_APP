import { useState } from "react";
import { data } from "../data/data";
import { useNavigate } from "react-router-dom";
import { shuffleArray } from "../utils/shuffle";
import { Question } from "../data/data";

const shuffleData: Question[] = shuffleArray(data);

export default function Quiz(): React.JSX.Element {
  const [currentQuestionIndex, setCurrentQuesitonIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    Array(shuffleArray.length).fill("")
  );
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);

  const currentQuestion = shuffleData[currentQuestionIndex];
  const naviagte = useNavigate();

  const goToNextQuestion = () => {
    if (currentQuestionIndex === data.length - 1) {
      naviagte("/result", {
        state: { questions: shuffleData, answers: selectedOptions },
      });
    } else {
      setCurrentQuesitonIndex(currentQuestionIndex + 1);
    }
    setHasAnswered(false);
  };

  const goToPreviousQuesiton = () => {
    if (currentQuestionIndex === 0) {
      setCurrentQuesitonIndex(0);
    } else {
      setCurrentQuesitonIndex(currentQuestionIndex - 1);
    }
    setHasAnswered(false);
  };

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...selectedOptions];
    newAnswers[currentQuestionIndex] = option;
    setSelectedOptions(newAnswers);
    setHasAnswered(true);
  };

  const goToHomePage = () => {
    alert("All progress will be lost");
    naviagte("/");
  };

  return (
    <div>
      <button onClick={goToHomePage}>Home Page</button>
      <h1>
        ({currentQuestionIndex + 1}){currentQuestion.question}
      </h1>
      <div>
        {currentQuestion.options.map((option, index) => (
          <div>
            ({index + 1}){" "}
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              style={{
                backgroundColor: hasAnswered
                  ? option === currentQuestion.answer
                    ? "green"
                    : option === selectedOptions[currentQuestionIndex]
                    ? "red"
                    : "initial"
                  : selectedOptions[currentQuestionIndex] === option
                  ? "lightblue"
                  : "initial",
              }}
            >
              {option}
            </button>
            <br />
            <br />
          </div>
        ))}
      </div>
      <button onClick={goToPreviousQuesiton}>Prev</button>
      <span> </span>
      <button onClick={goToNextQuestion}>
        {currentQuestionIndex === data.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
}
