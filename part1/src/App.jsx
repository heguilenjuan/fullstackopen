import { useState } from "react";
import Button from "./Button";
import Statistic from "./Statistic";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let total = good + neutral + bad;

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () =>{
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }
  const calculateAvergate = () => {
    if(good === 0) return -1
    let sumary = good - bad;
    return sumary/total
  }

  const percentPositive = () => {
    if(good === 0) return 0
    return (good/total)*100 + "%"
  }
  
  return (
    <div>
      <h3>give feedback</h3>
      <Button name={"good"} onClick={handleGood}/>
      <Button name={"neutral"} onClick={handleNeutral}/>
      <Button name={"bad"} onClick={handleBad}/>
      <h3>statistics</h3>
      <Statistic good={good} neutral={neutral} bad={bad} total={total} 
      Average={calculateAvergate()} Positive={percentPositive()} />
    </div>
  )
}

export default App