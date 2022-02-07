import React from 'react'
import { IPerson } from '../interfaces'

const PersonCard: React.FC<IPerson> = ({
    id,
    firstName,
    lastName,
    age,
    removePerson,
    editPerson,
}) => {
    return (
        <div>
            <h2>
                {firstName} {lastName}
            </h2>
            <p>Age: {age}</p>
            <button
                onClick={() =>
                    editPerson({
                        id: id,
                        firstName: 'test',
                        lastName: 'test',
                        age: 0,
                        removePerson,
                        editPerson,
                    })
                }
            >
                Edit
            </button>
            <button onClick={() => removePerson(id)}>Delete</button>
        </div>
    )
}

export default PersonCard
