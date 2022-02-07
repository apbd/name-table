export interface IPerson {
	id: string
	firstName: string
	lastName: string
	age: string
	addPerson: (person: IPerson) => void
	removePerson: (id: string) => void
	editPerson: (person: IPerson) => void
}

export interface IForm {
	addPerson: (person: IPerson) => void
	removePerson: (id: string) => void
	editPerson: (person: IPerson) => void
	id: string,
}
