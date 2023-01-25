import blobOne from './assets/img/blob1.png'
import blobTwo from './assets/img/blob2.png'

export default function Intro() {
  return (
    <div className="intro-container">
      <img className="blob-one" src={blobOne}/>
      <div className="intro-main">
        <h1 className="intro-title">Quizzical</h1>
        <p className="intro-description">This is a placeholder text for a possible description to be added</p>
        <button className="start-btn">Start quiz</button> 
      </div>
      <img className="blob-two" src={blobTwo}/>
    </div>
  )
}