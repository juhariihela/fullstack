import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({ text }) => (
    <h1>{text}</h1>
)

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)

const Statistic = ({ name, value }) => {
    return (
        <tr><td>{name}</td><td>{value}</td></tr>
    )
}

const Statistics = (props) => {
    const { good, neutral, bad } = props
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>Yht‰‰n palautetta ei ole annettu</div>
        )
    }

    return (
        <table>
            <tbody>
                <Statistic name="Hyv‰" value={good} />
                <Statistic name="Neutraali" value={neutral} />
                <Statistic name="Huono" value={bad} />
                <Statistic name="Kaikki" value={good + neutral + bad} />
                <Statistic name="Keskiarvo" value={keskiarvo({ ...props })} />
                <Statistic name="Positiivisia" value={positiiviset({ ...props })} />
            </tbody>
        </table>
    )
}

const keskiarvo = ({ good, neutral, bad }) => {
    let summa = good - bad
    let count = good + neutral + bad
    return summa / count
}

const positiiviset = ({ good, neutral, bad }) => {
    let count = good + neutral + bad
    return (good / count * 100) + ' %'
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    //const kasvata = (field) => () => this.setState({ [field]: this.state[field] + 1 })

    return (
        <div>
            <Title text="Anna palautetta" />
            <Button handleClick={() => setGood(good + 1)} text="Hyv‰" />
            <Button handleClick={() => setNeutral(neutral + 1)} text="Neutraali" />
            <Button handleClick={() => setBad(bad + 1)} text="Huono" />

            <Title text="Statistiikka" />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)