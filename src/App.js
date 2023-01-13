import React, { useState } from "react";
import Person from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id:1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id:2 },
    { name: 'Dan Abramov', number: '12-43-234345', id:3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id:4 }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const personsList = persons.map((person) => {
    return <Person key={person.id} person={person} />
  } );



  const addPerson = (event) => {
    event.preventDefault();
    const checkName = persons.map(item => item.name).includes(newName);

    const checkNumber = persons.map(item => item.number).includes(newNumber);
    

    if(checkName || checkNumber){
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        date: new Date().toISOString(),
        id: persons.length + 1
      }
  
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  }





  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <br/>
        <div>
          number : <input
          value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Number</h2>
      {personsList}
    </div>
  );
  }

export default App;
