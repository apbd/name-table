import React from 'react'

import './assets/App.css'
import PersonCard from './components/PersonCard'
import { IPerson } from './interfaces'
import PersonForm from './components/PersonForm'
import { useState } from 'react'

function App() {
	// Init state
	const [peopleList, setPeopleList] = useState<IPerson[]>([])

	// Filter the removed person out of the state
	const removePerson = (id: string) => {
		setPeopleList([
			...peopleList.filter(person => {
				return person.id !== id
			}),
		])
	}

	// Copy state and add person to array
	const addPerson = (values: IPerson): void => {
		setPeopleList([...peopleList, values])
	}

	// Filter the removed person out of the state and add the edited person in its place
	const editPerson = (newPerson: IPerson) => {
		// Get index of person that will be edited
		const editIndex = peopleList.findIndex(person => {
			return person.id === newPerson.id
		})
		// Copy list
		const newList = [...peopleList]

		// Replace person with edited person
		newList[editIndex] = newPerson

		// Update state
		setPeopleList(newList)
	}

	return (
		<div className='App'>
			<h1>Name table</h1>

			<PersonForm
				addPerson={addPerson}
				removePerson={removePerson}
				editPerson={editPerson}
				id=''
			/>
			{/* Make people list */}
			{peopleList.map((person: IPerson, index: number) => {
				return (
					<PersonCard
						key={index}
						id={person.id}
						firstName={person.firstName}
						lastName={person.lastName}
						age={person.age}
				addPerson={addPerson}
						removePerson={removePerson}
						editPerson={editPerson}
					/>
				)
			})}
		</div>
	)
}

export default App
