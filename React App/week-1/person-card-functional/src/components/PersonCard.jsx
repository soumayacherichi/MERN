import React, {Component} from "react";
const  PersonCard = (props) => {
  return (
    <div >
         
          <fieldset>
           
              <h1>{props.last_Name}, {props.first_Name}</h1>
               <p>Age: {props.age}</p>
               <p>Hair Color: {props.hairColor}</p>
          </fieldset>
          
    </div>
  )
}
export default PersonCard