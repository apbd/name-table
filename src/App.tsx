import customSort from './utils'
import './assets/App.css'
import PersonCard from './components/PersonCard'
import { IPerson } from './interfaces'
import PersonForm from './components/PersonForm'
import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import Paper from '@mui/material/Paper'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableSortLabel from '@mui/material/TableSortLabel'

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

	// Find person
	const findPerson = (id: string): IPerson => {
		// Get index of person that will be edited
		const person = peopleList.find(person => {
			return person.id === id
		})
		// Fix this
		return person!
	}

	// Sort peopleList on click
	const sort = (sortQuery: string) => {
		const sorted = peopleList.sort(customSort(sortQuery))
		setPeopleList([...sorted])
	}

	return (
		<div className='App'>
			<h1>Name table</h1>

			<PersonForm
				addPerson={addPerson}
				removePerson={removePerson}
				editPerson={editPerson}
				findPerson={findPerson}
				id=''
			/>
			<br />
			<hr />
			{/* Make people list */}
			<TableContainer component={Paper}>
				<Table size='medium' aria-label='a dense table'>
					<TableHead>
						<TableRow>
							<TableCell>
								<TableSortLabel
									active
									direction={'asc'}
									onClick={() => sort('firstName')}
								/>
								<TableSortLabel
									active
									direction={'desc'}
									onClick={() => sort('-firstName')}
								/>
								First Name
							</TableCell>
							<TableCell align='left'>
								<TableSortLabel
									active
									direction={'asc'}
									onClick={() => sort('lastName')}
								/>
								<TableSortLabel
									active
									direction={'desc'}
									onClick={() => sort('-lastName')}
								/>
								Last Name
							</TableCell>
							<TableCell align='left'>
								<TableSortLabel
									active
									direction={'asc'}
									onClick={() => sort('age')}
								/>
								<TableSortLabel
									active
									direction={'desc'}
									onClick={() => sort('-age')}
								/>
								Age
							</TableCell>
							<TableCell align='left'>Edit</TableCell>
							<TableCell align='left'>Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{peopleList.map((person: IPerson, index: number) => (
							<PersonCard
								key={index}
								id={person.id}
								firstName={person.firstName}
								lastName={person.lastName}
								age={person.age}
								addPerson={addPerson}
								removePerson={removePerson}
								editPerson={editPerson}
								findPerson={findPerson}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default App
