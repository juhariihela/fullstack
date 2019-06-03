import React from 'react';

const LisaaPuhelin = (props) => {
    const { newName, newPhone, handleNameChange, handlePhoneChange, editId} = props

    let buttonText = editId ? 'Tallenna' : 'Lis\xE4\xE4'

    return (
        <div>
            <h3>Lis&auml;&auml; uusi henkil&ouml;</h3>
            <div>
                <div className="fieldname">Nimi:</div> <input
                    value={newName}
                    onChange={handleNameChange}
                    className="field"
                />&nbsp;
                <div className="fieldname">Puhelin:</div> <input
                    value={newPhone}
                    onChange={handlePhoneChange}
                    className="field"
                />
            </div>
            <br/>
            <div>
                <button type="submit">{buttonText}</button>
            </div>
        </div>
    )
}

export default LisaaPuhelin