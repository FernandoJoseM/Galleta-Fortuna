import { useState } from 'react';
import './App.css'
import BtnQuote from './components/BtnQuote';
import Phrase from './components/Phrase';
import phrases from './utils/phrases.json'
import getRandomElemArray from './utils/getRandomElemArr';

function App() {
  // console.log(phrases);
  
  const [quote, setQuote] = useState(getRandomElemArray(phrases))
  const numberRnadom=getRandomElemArray([1,2,3,4])
  const [numberBg, setNumberBg] = useState(numberRnadom)
  const bgStyle={
    backgroundImage:`url(/fondo${numberBg}.jpg)`
  }

  return (
    <div className='principal-contain' style={bgStyle}>
      <h1>Galleta dela fortuna</h1>
      <Phrase
        phrase={quote}
      />
      <BtnQuote
        setQuote={setQuote}
        phrases={phrases}
        setNumber={setNumberBg}
      />
    </div>
  )
}

export default App
