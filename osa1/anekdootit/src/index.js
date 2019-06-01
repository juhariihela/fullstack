import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleEvent, text }) => (
    <button onClick={handleEvent}>{text}</button>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [voted, setVoted] = useState([0,0,0,0,0,0])

    const nextAnecdote = () => () => {
        let index = Math.floor(Math.random() * 6)
        setSelected(index)
    }

    const vote = () => () => {
        const kopio = [...voted]
        kopio[selected] += 1
        setVoted(kopio)
    }

    const anecdoteVotedCount = () => {
        return voted[selected]
    }

    const getVoteWinner = () => {
        let max = Math.max.apply(null, voted)
        console.log("max", max)

        if (max === 0) return "Not voted any items yet!"

        let index = voted.indexOf(max)
        console.log("index", index)
        return props.anecdotes[index] + " " + max + " kpl"
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]} <br /><br />
            has {anecdoteVotedCount()} votes <br /><br />
            <Button handleEvent={vote()} text="Vote" />&nbsp;
            <Button handleEvent={nextAnecdote()} text="Next anecdote" />
            <h1>Anecdote with most votes</h1>
            <p><b>{getVoteWinner()}</b></p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
