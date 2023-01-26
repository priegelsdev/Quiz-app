export default function Question(props) {

  // helper function to shuffle array of answers
  function shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = array[i]
      array[i] = array[j]
      array[j] = k
    }
    return array
  }

  const allAnswers = props.incorrectAnswers.map(incorrectAnswer => incorrectAnswer)
  allAnswers.push(props.correctAnswer)
  const shuffledAnswers = shuffle(allAnswers)

  const answerElements = shuffledAnswers.map(answer => {
    return <span 
        key = {crypto.randomUUID()} 
        className = {answer === props.correctAnswer ? 'wrong' : 'correct'}
        > {answer}
      </span>}
  )

  return (
      <div className="question">
        <h2 className="question-text">{props.question}</h2>
        <span> {answerElements} </span>
      </div>
  )

}