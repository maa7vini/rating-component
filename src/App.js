import './App.css';

import { useState } from 'react';

import starIcon from './assets/icon-star.svg'
import conclusionIcon from './assets/illustration-thank-you.svg'

function App() {

  const [ conclusionRate, setConclusionRate ] = useState("ratingBox")

  const [ boxRate, setBoxRate ] = useState("conclusionBox")

  const [ valorDoBotao, setValorDoBotao ] = useState(null)

  const pegarValor = (e) => {
    const valor = e.target.innerText
    setValorDoBotao(valor)
  }

  function showConclusionBox(){
    setConclusionRate("noRatingBox")
    setBoxRate("showConclusionBox")
  }

  return (
    <div className="App">
      <div className={conclusionRate}>

        <div className='ratingTxt'>
          <div className='divStar'>
            <img src={starIcon} alt='Icon Star' />
          </div>

          <h1> How did we do? </h1>

          <p> Please let us know how we did with your support request. All feedback is appreciated to help us
          improve our offering! </p>

          <div className='numbersDiv'>

            <button className='btn1' onClick={pegarValor}> 1</button>

            <button className='btn2' onClick={pegarValor}> 2 </button>

            <button className='btn3' onClick={pegarValor}> 3 </button>

            <button className='btn4' onClick={pegarValor}> 4 </button>

            <button className='btn5' onClick={pegarValor}> 5 </button>

          </div>

          <button className='submitBtn' onClick={showConclusionBox}> SUBMIT </button>
        </div>

      </div>

      <div className={boxRate}>

        <img src={conclusionIcon} alt='Conclusion Icon' />

        <div className='ratingNumber'>
          <p> You selected {valorDoBotao} out of 5 </p>
        </div>

        <h1> Thank you! </h1>

        <div className='conclusionTxt'>

          <p> We appreciate you taking the time to give a rating. <br /> 
          If you ever need more support, don`t hesitate to <br /> 
          get in touch! </p>

        </div>

      </div>

    </div>
  );
}

export default App;
