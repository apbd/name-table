
interface IPerson {
	id: string,
	firstName: string
	lastName: string
	age: number
	removePerson: (id: string) => void
}

export default IPerson 