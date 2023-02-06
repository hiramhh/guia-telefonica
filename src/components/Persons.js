import React from "react";

const Person = (props) => {
  const filter = props.filter;
  const persons = props.persons
  const personList = persons.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
  .map((person) =>{
    return(
    <p key={person.id}>{person.name} {person.number}</p>)
  })
    return (
      <div>
        {personList}
      </div>
    )
}

export default Person;