import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({restartGame, score}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Ваш результат {score} из 10</h2>
      <button onClick={restartGame}>Попробовать снова</button>
    </div>
  );
}

function Game({question, nextQuestion, progressBar}) {
  return (
    <>
      <div className="progress">
        <div style={{ width: `${progressBar}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => <li key={index} onClick={() => nextQuestion(index)}>{text}</li>)}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  function calculateProgressBar() {
    const percentage = 100 / questions.length * (step + 1);
    setProgressBar(percentage);
  }
  const nextQuestion = (index) => {
    if(index === questions[step].correct) {
      setScore(prev => prev + 1);
    }
    setStep(prev => prev + 1);
    calculateProgressBar();
  }
  const restartGame = () => {
    setStep(0);
    setScore(0);
    setProgressBar(0);
  }
  return (
    <div className="App">
      {step != questions.length ? <Game progressBar={progressBar} question={questions[step]} nextQuestion={nextQuestion}/> : <Result score={score} restartGame={restartGame}/>}
    </div>
  );
}

export default App;
