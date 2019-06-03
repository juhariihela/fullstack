import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
    return (
        <div>
            Rajaa maita:&nbsp;
            <input
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    )
}

export default Filter