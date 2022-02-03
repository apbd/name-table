import React from 'react';

const AddNewPerson: React.FC<{firstName: string, lastName: string, age: number}> = ({firstName, lastName, age})=> {
    return (
    <div>
        <h1>{firstName} {lastName}</h1>
        <p>Age: {age}</p>
    </div>)
}

export default AddNewPerson 