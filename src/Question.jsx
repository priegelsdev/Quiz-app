export default function Question(props) {

  const correctAnswer = props.correctAnswer
  const wrongAnswers = props.incorrectAnswers
  const allAnswers = wrongAnswers.map(wrongAnswer => wrongAnswer)
  allAnswers.push(correctAnswer)
  console.log(allAnswers)

  // helper function to shuffle array of answers
  function shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = array[i]
      array[i] = array[j]
      array[j] = k
    }
    console.log(array)
    return array
  }

  const shuffledAnswers = shuffle(allAnswers)

  const answerElements = shuffledAnswers.map(answer => <span className={answer === correctAnswer ? 'wrong' : 'correct'}>{answer} </span>)
  


  return (
      <div className="question">
        <h2 className="question-text">{props.question}</h2>
        {/* add logic to make 4 questions appear at random positions */}
        <span> {answerElements} </span>
      </div>
  )

}