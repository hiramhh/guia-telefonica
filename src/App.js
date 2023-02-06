import React, { useState } from "react";
import Persons from "./components/Persons";
import FilterName from "./components/FilterNames";
import PersonForm from "./components/PersonForm";

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id:1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id:2 },
    { name: 'Dan Abramov', number: '12-43-234345', id:3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id:4 }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");


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
      <FilterName 
      filter={filter} 
      setFilter={setFilter}/>
      
      <h3>Add a new</h3>
      
      <PersonForm 
      addPerson={addPerson}
      newName={newName}
      newNumber={newNumber}
      setNewName={setNewName}
      setNewNumber={setNewNumber}/>
      
      <h2>Number</h2>
      
      <Persons 
      persons={persons}
      filter={filter}/>
      debug: {filter}
    </div>
  );
  }

export default App;
