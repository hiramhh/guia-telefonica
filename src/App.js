import React, { useState } from "react";
import Person from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");


  const personsList = persons.map((person) => {
    return <Person key={person.id} person={person}/>
  } );



  const addPerson = (event) => {
    event.preventDefault();
    const checkName = persons.map(item => item.name).includes(newName);

    if(checkName){
      alert(`${newName} is already added to phonebook`);
      setNewName("");
    } else {
      const personObject = {
        name: newName,
        date: new Date().toISOString(),
        id: persons.length + 1
      }
  
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
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
