import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'

const App = () => {
    const courses = [
        {
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
            },
            {
                name: 'Laatukurssi',
                exercises: 20
            },
            {
                name: 'Azuren perusteet',
                exercises: 30
            }
            ]
        },
        {
            name: 'Azure guruksi',
            parts: [
                {
                    name: 'Azure perusteet',
                    exercises: 8
                },
                {
                    name: 'Azure pintaa syvemm\xE4lt\xE4',
                    exercises: 13
                }
            ]
        }
    ]

    const courseList = courses.map(course => <Course course={course} />)

    return (
        <div>
            <h1>Current study history</h1>
            {courseList}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
