export default function Question() {

  fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    .then(res => res.json())
    .then(data => console.log(data))



  return (
      <div className="question">

      </div>
  )

}