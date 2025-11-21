import React, { useState, useEffect } from "react";
import "./App.css"; // CSS faylni ulaymiz

function App() {
  const questions = [
    {
      id: 1,
      question: "React nima?",
      options: ["Framework", "Library", "Language"],
      answer: "Library",
    },
    {
      id: 2,
      question: "useState nima uchun ishlatiladi?",
      options: ["UI yaratish", "State boshqarish", "API chaqirish"],
      answer: "State boshqarish",
    },
    {
      id: 3,
      question: "JSX nima?",
      options: ["JavaScript XML", "JavaScript Syntax", "HTML Code"],
      answer: "JavaScript XML",
    },
    {
      id: 4,
      question: "useEffect qachon ishlaydi?",
      options: [
        "Har renderda",
        "Faqat state o‘zgarganda",
        "Faqat komponent yaratganda",
      ],
      answer: "Har renderda yoki dependency o‘zgarganda",
    },
    {
      id: 5,
      question: "Props qayerga uzatiladi?",
      options: ["Parent → Child", "Child → Parent", "Global State"],
      answer: "Parent → Child",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option) => {
    const correctAnswer = questions[currentQuestion].answer;
    if (option === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  useEffect(() => {
    if (isFinished) {
      alert(`O‘yin tugadi! Sizning natijangiz: ${score} / ${questions.length}`);
    }
  }, [isFinished]);

  return (
    <div className="quiz-container">
      <h1>React Quiz Game</h1>

      {isFinished ? (
        <div className="result">
          <h2>Sizning natijangiz:</h2>
          <h3>
            {score} / {questions.length}
          </h3>
          <button className="restart-btn" onClick={() => window.location.reload()}>
            Qaytadan o‘ynash 
          </button>
        </div>
      ) : (
        <div className="question-box">
          <h2>
            Savol {currentQuestion + 1}: {questions[currentQuestion].question}
          </h2>

          <div className="options">
            {questions[currentQuestion].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="option-btn"
              >
                {opt}
              </button>
            ))}
          </div>

          <p className="score">Ball: {score}</p>
        </div>
      )}
    </div>
  );
}

export default App;
