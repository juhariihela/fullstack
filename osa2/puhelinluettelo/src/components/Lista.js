import React from 'react';
import Henkilo from './Henkilo'

const Lista = ({ persons, filter, deletePhone, handleEdit }) => {

    const filterPeoples = (filter) => {
        let list = persons

        if (filter) {
            list = persons.filter(people => {
                return (people.name.toLowerCase().includes(filter.toLowerCase()) || people.phone.includes(filter))
            })
        }

        return (
            list.map(person => <Henkilo key={person.id} person={person} deletePhone={deletePhone} handleEdit={handleEdit} />)
        )
    }

    return (
        <div>
            <table>
                <tbody>
                    {filterPeoples(filter)}
                </tbody>
            </table>
        </div>
    )
}

export default Lista