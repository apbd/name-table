import React, { useState } from 'react'
import { IPerson } from '../interfaces'
import PersonForm from './PersonForm'

const PersonCard: React.FC<IPerson> = ({
	id,
	firstName,
	lastName,
	age,
	addPerson,
	removePerson,
	editPerson,
    findPerson
}) => {
	const [visible, setVisible] = useState(false)

	return (
		<div>
			<h2>
				{firstName} {lastName}
			</h2>
			<p>Age: {age}</p>
			<button
				onClick={() => {
					setVisible(!visible)
				}}
			>
				Edit
			</button>
			{visible && (
				<PersonForm
					addPerson={addPerson}
					removePerson={removePerson}
					editPerson={editPerson}
                    findPerson={findPerson}
					id={id}
				/>
			)}
			<button onClick={() => removePerson(id)}>Delete</button>
		</div>
	)
}

export default PersonCard
