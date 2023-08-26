import React from 'react'

const Phrase = ({phrase}) => {
    console.log(phrase);
  return (
    <p className='frase'>{phrase.phrase}</p>
  )
}

export default Phrase