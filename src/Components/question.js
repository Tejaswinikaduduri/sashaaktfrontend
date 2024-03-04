// question.js
import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the first right of a child?',
    options: ['Right to education', 'Right to play', 'Right to life'],
    correctAnswer: 'Right to life',
  },
  {
    question: 'Which organization is known for child rights advocacy?',
    options: ['UNESCO', 'UNICEF', 'WHO'],
    correctAnswer: 'UNICEF',
  },
  {
    question: 'At what age does the Universal Declaration of Human Rights consider a child?',
    options: ['12', '16', '18'],
    correctAnswer: '18',
  },
  {
    question: 'What is the significance of the Convention on the Rights of the Child?',
    options: ['It sets out the civil, political, economic, and social rights of children', 'It only focuses on education rights', 'It applies only to certain countries'],
    correctAnswer: 'It sets out the civil, political, economic, and social rights of children',
  },
  {
    question: 'Which right ensures that children have the right to express their opinions freely?',
    options: ['Right to play', 'Right to education', 'Right to participation'],
    correctAnswer: 'Right to participation',
  },
];

function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {showResult ? (
        <div>
          <h2 style={{ color: '#007bff' }}>Quiz Completed!</h2>
          <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Your Score: {score} out of {questions.length}</p>
          <button
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              marginTop: '20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background-color 0.3s',
            }}
            onClick={resetQuiz}
          >
            Retry
          </button>
        </div>
      ) : (
        <div>
          <h2 style={{ fontSize: '1.5rem', color: '#007bff', marginBottom: '10px' }}>Question {currentQuestion + 1}</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{questions[currentQuestion].question}</p>
          <ul style={{ listStyleType: 'none', padding: '0', margin: '0', cursor: 'pointer' }}>
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerClick(option)}
                style={{
                  backgroundColor: '#fce4ec',
                  border: '1px solid #e0a7c1',
                  padding: '10px',
                  margin: '10px',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s',
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Question;
