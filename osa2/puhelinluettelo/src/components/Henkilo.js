import React from 'react';

const Henkilo = ({ person, deletePhone, handleEdit }) =>
    <tr key={person.id}>
        <td className="cell">{person.name}</td>
        <td className="cell">{person.phone}</td>
        <td className="buttonCell"><button onClick={handleEdit} value={person.id}>Muokkaa</button></td>
        <td className="buttonCell"><button onClick={deletePhone} value={person.id}>Poista</button></td>
    </tr>

export default Henkilo