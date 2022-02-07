import React from 'react'
import { IPerson, IForm } from '../interfaces'
import { useFormik, FormikHelpers } from 'formik'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import SaveIcon from '@mui/icons-material/Send'

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

	const formik = useFormik({
		initialValues: person,
		onSubmit: (values: IPerson, { setSubmitting }: FormikHelpers<IPerson>) => {
			id
				? editPerson({ ...values, id: id })
				: addPerson({ ...values, id: Math.random().toString(16).slice(2) })
			setTimeout(() => {
				setSubmitting(false)
			}, 500)
		},
	})
	return (
		<form onSubmit={formik.handleSubmit}>
			<TextField
				label='First Name'
				value={formik.values.firstName}
				onChange={formik.handleChange}
				id='firstName'
				name='firstName'
				placeholder='John'
				variant='outlined'
			/>
			<TextField
				label='Last Name'
				value={formik.values.lastName}
				onChange={formik.handleChange}
				id='lastName'
				name='lastName'
				placeholder='Doe'
				variant='outlined'
			/>
			<TextField
				label='Age'
				value={formik.values.age}
				onChange={formik.handleChange}
				id='age'
				name='age'
				placeholder='0'
				type='number'
				variant='outlined'
			/>

			<Button startIcon={<SaveIcon />} color="success" variant='contained' type='submit'>
				Submit
			</Button>
		</form>
	)
}

export default PersonForm
