import { useState } from 'react'

const GoodButton = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const NeutralButton = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const BadButton = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistic = ({statistic, value}) => (
  <p>{statistic}: {value}</p>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = all !== 0 ? (good * 1 + bad * -1) / all : 0
  const positive = all !== 0 ? good * (100 / all) : 0

  return (
    <div>
      <Statistic statistic={"good"} value={good} />
      <Statistic statistic={"neutral"} value={neutral} />
      <Statistic statistic={"bad"} value={bad} />
      <Statistic statistic={"all"} value={all} />
      <Statistic statistic={"average"} value={average} />
      <Statistic statistic={"positive"} value={`${positive} %`} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <GoodButton text={"good"} handleClick={() => setGood(good + 1)} />
      <NeutralButton text={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <BadButton text={"bad"} handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App