import Answer from './Answer'
import Intro from './Intro'
import Question from './Question'

export default function App() {
  fetch('https://opentdb.com/api.php?amount=5&type=multiple')
  .then(res => res.json())
  .then(data => console.log(data))

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