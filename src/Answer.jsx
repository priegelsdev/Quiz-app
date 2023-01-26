export default function Answers(props) {

  return (
    <div className="answer">
    <h2 className="question-text">{props.question}</h2>
    {/* add logic to make 4 questions appear at random positions */}
    <span> { /*{props.correct_answer, props.incorrect.answers[0-2]}*/ } placeholder 2</span>
  </div>
  )

}
