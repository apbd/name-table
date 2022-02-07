import React from 'react'
import { IPerson, IForm } from '../interfaces'
import { Formik, Field, Form, FormikHelpers } from 'formik'

const PersonForm: React.FC<IForm> = ({
	addPerson,
	removePerson,
	editPerson,
	findPerson,
	id,
}) => {

	// Find person if editing person, if no person found, enter empty values
	const person = findPerson(id) ?? {
		id: '_',
		firstName: '',
		lastName: '',
		age: '',
		addPerson: addPerson,
		removePerson: removePerson,
		editPerson: editPerson,
		findPerson: findPerson,
	}
	return (
		<Formik
			initialValues={person}
			onSubmit={(
				values: IPerson,
				{ setSubmitting }: FormikHelpers<IPerson>
			) => {
				id
					? editPerson({ ...values, id: id })
					: addPerson({ ...values, id: Math.random().toString(16).slice(2) })
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
				<Field id='age' name='age' placeholder='0' type="number"/>

				<button type='submit'>Submit</button>
			</Form>
		</Formik>
	)
}

export default PersonForm
