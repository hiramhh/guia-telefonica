import React from "react";

const PersonForm = ({addPerson, newName, newNumber, setNewNumber, setNewName}) => {
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }
  return(
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
  )
}

export default PersonForm;