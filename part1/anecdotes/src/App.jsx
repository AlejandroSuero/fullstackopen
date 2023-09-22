import { useState } from 'react'

const Anecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}
const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>
}

const checkRandomAnecdote = (prevAnecdote, randomAnecdote, length) => {
  if (randomAnecdote === prevAnecdote) {
    if (randomAnecdote + 1 >= length){
      if (randomAnecdote - 1 < 0) return prevAnecdote + 1
      return prevAnecdote - 1
    }
    return randomAnecdote + 1
  }
  return randomAnecdote
}

const MostVotedAnecdote = ({votes, anecdotes}) => {
  const mostVotedIndex = votes.indexOf(Math.max(...votes))
  return <Anecdote anecdote={anecdotes[mostVotedIndex]} votes={votes[mostVotedIndex]} />
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdoteClick = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(prevAnecdote => {
      return checkRandomAnecdote(prevAnecdote, randomAnecdote, anecdotes.length)
    })
  }
  const handleVoteClick = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button text={"vote"} handleClick={handleVoteClick} />
      <Button text={'next anecdote'} handleClick={handleNextAnecdoteClick} />
      <h1>Anecdote with most votes</h1>
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App