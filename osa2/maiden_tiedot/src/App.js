import React, { useState, useEffect } from 'react';
import CountryList from './components/CountryList'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    const handleFilterClear = (event) => {
        setFilter('')
    }
    const selectCountryEvent = (event) => {
        let country = window.event.srcElement.value
        console.log('country', country)
        setFilter(country)
    }

    return (
        <div>
            <Filter
                filter={filter}
                handleFilterChange={handleFilterChange}
            />

            <CountryList
                countries={countries}
                filter={filter}
                selectCountryEvent={selectCountryEvent}
                handleFilterClear={handleFilterClear}
            />
        </div>
    )
}

export default App
