import React, { useState } from 'react'
import './assets/App.css'
import PersonCard from './components/PersonCard'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { IPerson } from './interfaces/IPerson'

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
			<h1>People:</h1>

			{/* Person creation form */}
			<Formik
				initialValues={{
					id: '_',
					firstName: '',
					lastName: '',
					age: 0,
					removePerson: removePerson,
					editPerson: editPerson,
				}}
				onSubmit={(
					values: IPerson,
					{ setSubmitting }: FormikHelpers<IPerson>
				) => {
					addPerson({ ...values, id: Math.random().toString(16).slice(2) })
					setTimeout(() => {
						setSubmitting(false)
					}, 500)
				}}
			>
				<Form>
					<label htmlFor='firstName'>First Name</label>
					<Field id='firstName' name='firstName' placeholder='John' />

					<label htmlFor='lastName'>Last Name</label>
					<Field id='lastName' name='lastName' placeholder='Doe' />

					<label htmlFor='age'>Age</label>
					<Field id='age' name='age' placeholder='40' type='number' />

					<button type='submit'>Submit</button>
				</Form>
			</Formik>

			{/* Make people list */}
			{peopleList.map((person: IPerson, index: number) => {
				return (
					<PersonCard
						key={index}
						id={person.id}
						firstName={person.firstName}
						lastName={person.lastName}
						age={person.age}
						removePerson={removePerson}
						editPerson={editPerson}
					/>
				)
			})}
		</div>
	)
}

export default App
