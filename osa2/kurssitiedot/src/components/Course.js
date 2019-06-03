import React from 'react'

const Course = ({ course }) => {

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

    const Part = ({ part }) => <p><b>Name:</b> {part.name} <b>Exercises:</b> {part.exercises}</p>

    const Footer = ({ parts }) => {
        const summa = parts.reduce((sum, part) => sum + part.exercises, 0)

        return (
            <div><b>Number of exercises:</b> {summa}</div>
        )
    }

    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Footer parts={course.parts} />
        </>
    )
}

export default Course