import React, { useState } from 'react'
import { IPerson } from '../interfaces'
import PersonForm from './PersonForm'
import DeleteIcon from '@mui/icons-material/Delete'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const PersonCard: React.FC<IPerson> = ({
	id,
	firstName,
	lastName,
	age,
	addPerson,
	removePerson,
	editPerson,
	findPerson,
}) => {
	const [visible, setVisible] = useState(false)

	return (
		<TableRow
			key={id}
			sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
		>
			<TableCell>{firstName}</TableCell>
			<TableCell align='left'>{lastName}</TableCell>
			<TableCell align='left'>{age}</TableCell>
			<TableCell align='left'>
				<Grid container spacing={2} alignItems="center">
					<Grid item> 
						<Button color={visible ? 'error' : "primary" }
							onClick={() => {
								setVisible(!visible)
							}}
							variant='outlined'
						>
							{ visible ? "Close" : "Edit"}
						</Button>
					</Grid>
					<Grid item>
						{visible && (
							<PersonForm
								addPerson={addPerson}
								removePerson={removePerson}
								editPerson={editPerson}
								findPerson={findPerson}
								id={id}
							/>
						)}
					</Grid>
				</Grid>
			</TableCell>
			<TableCell align='left'>
				<Button
					startIcon={<DeleteIcon />}
					variant='outlined'
					color='error'
					onClick={() => removePerson(id)}
				>
					DELETE
				</Button>
			</TableCell>
		</TableRow>
	)
}

export default PersonCard
