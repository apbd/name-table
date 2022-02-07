export interface IPerson extends IForm {
	firstName: string
	lastName: string
	age: string
}

export interface IForm {
	addPerson: (person: IPerson) => void
	removePerson: (id: string) => void
	editPerson: (person: IPerson) => void
	findPerson: (id: string) => IPerson | undefined
	id: string,
}
