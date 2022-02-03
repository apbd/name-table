import React, { useState } from 'react';
import './assets/App.css';
import PersonCard from './components/PersonCard';

interface Person {
  firstName: string, lastName: string, age: number
}


function App() {
  
  const [people, setPeople] = useState<Person[]>([{firstName: "John", lastName: "Doe", age: 30},{firstName: "Matti", lastName: "Meikäläinen", age: 20}])
  
  

  const handleSubmit = (event: any) => { 
    event.preventDefault();
    console.log(event)
    // setPeople([...people, { firstName: }] )
  }
  
  return (
    <div className="App">
      <h1>People:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" />
      </form>

    {  people.map((person, index) => {
      return <PersonCard key={index} firstName={person.firstName} lastName={person.lastName} age={person.age} />
      })}
    </div>
  );
}

export default App;
