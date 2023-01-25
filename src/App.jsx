import Answer from './Answer'
import Intro from './Intro'
import Question from './Question'

export default function App() {
  // save data to state to be displayed in either questions/answers view
  // (figure out exact logic on the way)
  
  fetch('https://opentdb.com/api.php?amount=5&type=multiple')
  .then(res => res.json())
  .then(data => console.log(data))

  // plan for now: create two view states when clicking button: questions & answer
  // in those create state for selected item and 
  // apply colors in css


  // put props in components and add consts/functions to add multiple questions/answers

  return (
    <main>
      <Intro 
      />
      <Question
      />
      <Answer
      />
    </main>
  )
}