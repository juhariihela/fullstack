import React from 'react';

const Filter = (props) => {

    const { filter, handleFilterChange } = props

    return (
        <div>
            <div className="fieldname">Rajaa henkil&ouml;it&auml;:</div>
            <input
                value={filter}
                onChange={handleFilterChange}
                className="field"
            />
        </div>
    )
}

export default Filter