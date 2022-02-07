export interface IPerson {
	id: string,
	firstName: string
	lastName: string
	age: number
	removePerson: (id: string) => void
	editPerson: (person: IPerson) => void
}
