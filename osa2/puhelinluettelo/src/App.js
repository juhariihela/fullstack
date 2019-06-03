import React, { useState, useEffect } from 'react'
import Lista from './components/Lista'
import LisaaPuhelin from './components/LisaaPuhelin'
import Filter from './components/Filter'
import Message from './components/Message'
import './index.css'
import personService from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [message, setMessage] = useState('')
    const [filter, setFilter] = useState('')
    const [editId, setEditId] = useState('')

    useEffect(() => {
        console.log('effect')
        personService
            .getAll()
            .then(response => {
                setPersons(response.data)
            })
            .catch(error => {
                console.log('getAll error', error)
                setMessage('K\xE4ytt\xE4jien hakeminen ep\xE4onnistui')
            })
    }, [])

    const savePhone = (event) => {
        event.preventDefault()

        if (!editId && persons.find(person => person.name === newName)) {
            setMessage(`${newName} on jo lis\xE4tty`)
        } else {
            const phoneObject = {
                name: newName,
                phone: newPhone
            }

            if (editId) {
                phoneObject.id = editId

                personService
                    .update(editId, phoneObject)
                    .then(response => {
                        setPersons(persons.map(person => person.id === editId ? response.data : person))
                        setNewName('')
                        setNewPhone('')
                        setEditId('')
                        setMessage('P\xE4ivitettiin ' + phoneObject.name)
                    })
                    .catch(error => {
                        console.log('update error', error)
                        setMessage('K\xE4ytt\xE4j\xE4 oli jo poistettu kannasta')
                        setPersons(persons.filter(person => person.id !== editId))
                    })
            } else {
                personService
                    .create(phoneObject)
                    .then(response => {
                        setPersons(persons.concat(response.data))
                        setNewName('')
                        setNewPhone('')
                        setMessage('Lis\xE4ttiin ' + phoneObject.name)
                    })
                    .catch(error => {
                        console.log('create error', error)
                        setMessage('K\xE4ytt\xE4j\xE4n lis\xE4\xE4minen ep\xE4onnistui')
                    })
            }
        }

        setTimeout(() => {
            setMessage('')
        }, 5000)
    }

    const deletePhone = (event) => {
        event.preventDefault()
        let id = Number(window.event.srcElement.value)
        let name = persons.find(person => person.id === id).name

        if (window.confirm(`Haluatko varmasti poistaa k\xE4ytt\xE4j\xE4n ${name}?`)) {
            personService
                .remove(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))
                    setMessage('Poistettiin ' + name)
                })
                .catch(error => {
                    console.log('deletePhone error', error)
                    setMessage('K\xE4ytt\xE4j\xE4 oli jo poistettu kannasta')
                    setPersons(persons.filter(person => person.id !== id))
                })

            setTimeout(() => {
                setMessage('')
            }, 5000)
        }
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        console.log(event.target.value)
        setNewPhone(event.target.value)
    }

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    const handleEdit = (event) => {
        let id = Number(window.event.srcElement.value)
        console.log('handleEdit',id)
        let person = persons.find(person => person.id === id)
        if (person) {
            setEditId(id)
            setNewName(person.name)
            setNewPhone(person.phone)
        }
    }

    return (
        <div>
            <h2>Puhelinluettelo</h2>

            <Message message={message} />

            <Filter
                filter={filter}
                handleFilterChange={handleFilterChange}
            />

            <form onSubmit={savePhone}>
                <LisaaPuhelin
                    newName={newName}
                    newPhone={newPhone}
                    handleNameChange={handleNameChange}
                    handlePhoneChange={handlePhoneChange}
                    editId={editId}
                />
            </form>

            <h2>Numerot</h2>
            <Lista
                persons={persons}
                filter={filter}
                deletePhone={deletePhone}
                handleEdit={handleEdit}
            />
       </div>
    )
}

export default App
