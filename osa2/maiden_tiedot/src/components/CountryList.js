import React from 'react';

const CountryList = ({ countries, filter, selectCountryEvent, handleFilterClear }) => {

    const filterCountries = (filter) => {
        let list = countries

        if (filter) {
            list = countries.filter(country => {
                return (country.name.toLowerCase().includes(filter.toLowerCase()))
            })

            if (list.length > 10) {
                return (
                    <tr><td>Haku tuottaa liian paljon rivej&auml;, t&auml;smenn&auml; hakuehtoa</td></tr>
				)
            }

            if (list.length === 1) {
                return (
                    <tr>
						<td>
							<h1>{list[0].name}</h1>
							<p><strong>Population:</strong> {list[0].population}</p>
							<p><strong>Flag:</strong></p>
                            <p><img src={list[0].flag} width='300' height='200' alt={list[0].name} /></p>
                            <p><button onClick={handleFilterClear}>Sulje</button></p>
                        </td>
                    </tr>
				)
            }
        }

        return (
            list.map(country =>
                <tr key={country.alpha2Code}>
                    <td>{country.name}</td>
                    <td><button onClick={selectCountryEvent} value={country.name}>Avaa</button></td>
                </tr>
            )
        )
    }

    return (
        <div>
            <h2>Maat</h2>
            <table>
                <tbody>
                    {filterCountries(filter)}
                </tbody>
            </table>
        </div>
    )
}

export default CountryList