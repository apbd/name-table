import React from 'react';
import IPerson from '../interfaces/IPerson'


const PersonCard: React.FC<IPerson> = ({id, firstName, lastName, age, removePerson}) => {
    return (
    <div>
        <h1>{firstName} {lastName}</h1>
        <p>Age: {age}</p>
        <button onClick={() => removePerson(id)}>Delete</button>
    </div>)
}

export default PersonCard 