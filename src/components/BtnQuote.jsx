import React from 'react'
import getRandomElemArray from '../utils/getRandomElemArr'

const BtnQuote = ({setQuote,phrases,setNumber}) => {
    const handleRandomPhrase=()=>{
        setQuote(getRandomElemArray(phrases))
        setNumber(getRandomElemArray([1,2,3,4]))
      
    }
  return (
    <button onClick={handleRandomPhrase}>ver otros</button>
  )
}

export default BtnQuote