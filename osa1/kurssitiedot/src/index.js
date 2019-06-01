import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => <div><h1>Course: {course} </h1></div>

const Content = ({ parts }) => {
    return (
        <div><p><b>Parts:</b></p>
        {
            parts.map((part, i) => <Part part={part} />)
        }
        </div>
    )
}

const Part = ({ part }) => <p><b>Name: {part.name} Exercises: {part.exercises} </b></p>

const Footer = ({ parts }) => {
    let summa = 0

    parts.map((part, i) => summa += part.exercises)

    return (
        <div><b>Number of exercises: {summa}</b></div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Footer parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))