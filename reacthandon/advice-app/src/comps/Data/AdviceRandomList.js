import React from 'react'
const adviceArray =[
    "Take a deep breath",
    "Go for a walk",
    "Practice yoga",
    "Meditate",
]
    

export default function AdviceRandomList({onSelectAdvice}){

    const getRandomAdvice =  () => {
        const  randomIndex =  Math.floor(Math.random()* adviceArray.length)
        return adviceArray[randomIndex];
    }



    const handleClick = () => {
        const advice = getRandomAdvice();
        onSelectAdvice(advice);
    }

  return (
    <div>
        <button onClick={handleClick}>Get Advice</button>
    </div>
  )
}
