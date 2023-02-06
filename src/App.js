import React, { useEffect, useState } from "react";
import Persons from "./components/Persons";
import FilterName from "./components/FilterNames";
import PersonForm from "./components/PersonForm";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data);
      })
  }, []);

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
    </div>
  );
  }

export default App;
