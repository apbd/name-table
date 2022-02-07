import React from 'react'
import { IPerson, IForm } from '../interfaces'
import { Formik, Field, Form, FormikHelpers } from 'formik'

const CreatePersonForm: React.FC<IForm> = ({
	addPerson,
	removePerson,
	editPerson,
}) => {
	return (
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
	)
}

export default CreatePersonForm
