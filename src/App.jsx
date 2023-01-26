import {useState, useEffect} from 'react'
import Answer from './Answer'
import Intro from './Intro'
import Question from './Question'

export default function App() {
  // save data to state to be displayed in either questions/answers view
  // (figure out exact logic on the way)

  // initializing question state on button click

  let viewScreen = {
    introView: true,
    questionsView: false,
    answersView: false
  }

  const [view, setView] = useState(viewScreen)
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      setQuestions(data.results)})
  }, [viewScreen.introView])

  const qEls = questions.map(question => {
    return <Question
      key={crypto.randomUUID()}
      question={question.question}
      incorrectAnswers={question.incorrect_answers}
      correctAnswer={question.correct_answer}
    />
  })


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


/*   const answers =  */

  // put props in components and add consts/functions to add multiple questions/answers

  return (
    <main>
      {/* if introView, show Intro component,
            else if questionsView, show question components,
            else if answersView, show answers components */}
      {view.introView && <Intro onClick={startGame}/>}
{/*       {view.questionsView && {qEls}} */}
      {qEls}
      {view.answersView && <Answer />}

      {view.questionsView && <button className="check-btn" onClick={checkAnswers}>Check answers</button>}
    </main>
  )
}