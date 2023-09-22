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
  <p>{statistic} {value}</p>
)

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
      <Statistic statistic={"good"} value={good} />
      <Statistic statistic={"neutral"} value={neutral} />
      <Statistic statistic={"bad"} value={bad} />
    </div>
  )
}

export default App