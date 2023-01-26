import {useState, useEffect} from 'react'
import Answer from './Answer'
import Intro from './Intro'
import Question from './Question'
import blobOne from './assets/img/blob1.png'
import blobTwo from './assets/img/blob2.png'

export default function App() {
  // save data to state to be displayed in either questions/answers view
  // (figure out exact logic on the way)

  // initializing question state on button click

  const [view, setView] = useState({
    introView: true,
    questionsView: false,
    answersView: false
  })
  const [questions, setQuestions] = useState([])

  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      setQuestions(data.results)})
  }, [view.introView])

  const qEls = questions.map(question => {
    return <Question
      key={crypto.randomUUID()}
      question={question.question}
      incorrectAnswers={question.incorrect_answers}
      correctAnswer={question.correct_answer}
      isLogged={isLogged}
      onClick={logAnswer}
    />
  })

  function logAnswer() {
    setIsLogged(prevState => !prevState)

    if (isLogged) {
      console.log('test')
    }
  }

  // plan for now: create two view states when clicking button: questions & answer
  // in those create state for selected item and 
  // apply colors in css

  function startGame() {
    setView(prevState => ({
      introView: false,
      questionsView: true,
      answersView: false
    }))
  }

  function checkAnswers() {
    setView(prevState => ({
      introView: false,
      questionsView: false,
      answersView: true
    }))
  }

  function test() {
    console.log('test')
  }

/*   const answers =  */

  // put props in components and add consts/functions to add multiple questions/answers

  return (
    <main>
      <img className="blob-one" src={blobOne}/>
      {/* if introView, show Intro component,
            else if questionsView, show question components,
            else if answersView, show answers components */}
      {view.introView && <div className="intro-container">
        <Intro onClick={startGame}/>
      </div>}
      {view.questionsView && <div className="questions-container">{qEls}</div>}
            
      {view.answersView && <Answer />}

      {view.questionsView && <button className="check-btn" onClick={checkAnswers}>Check answers</button>}
      <img className="blob-two" src={blobTwo}/>
    </main>
  )
}