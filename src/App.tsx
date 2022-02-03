import React, { useState } from 'react'
import './assets/App.css'
import PersonCard from './components/PersonCard'
import { Formik, Field, Form, FormikHelpers } from 'formik'

interface Person {
	firstName: string
	lastName: string
	age: number
}

function App() {
	const [people, setPeople] = useState<Person[]>([
		{ firstName: 'John', lastName: 'Doe', age: 30 },
		{ firstName: 'Matti', lastName: 'Meikäläinen', age: 20 },
	])


	return (
		<div className='App'>
			<h1>People:</h1>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					age: 0,
				}}
				onSubmit={(
					values: Person,
					{ setSubmitting }: FormikHelpers<Person>
				) => {
					setTimeout(() => {
						// console.log(JSON.stringify(values, null, 2))
		setPeople([...people, values] )

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
					<Field
						id='age'
						name='age'
						placeholder='40'
						type='number'
					/>

					<button type='submit'>Submit</button>
				</Form>
			</Formik>

			{people.map((person, index) => {
				return (
					<PersonCard
						key={index}
						firstName={person.firstName}
						lastName={person.lastName}
						age={person.age}
					/>
				)
			})}
		</div>
	)
}

export default App
