import React from "react";

const FilterName = (props) => {
  
  const handleFilterChange = (event) => {
    props.setFilter(event.target.value);
  }
  return (
    <div>
          filter shown with: <input
          value={props.filter}
          onChange={handleFilterChange}/>
    </div>
  )
}


export default FilterName;