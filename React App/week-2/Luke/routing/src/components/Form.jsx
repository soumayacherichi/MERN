import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Form = (props) => {
    const [peopleID, setPeopleID] = useState(1)
    const [planetsID, setPlanetsID] = useState(1)
    const navigate =useNavigate()
    const handleForm = (e)=>{
        e.preventDefault()
        navigate(`/${planetsID}/${peopleID}`);
    }
    return (
        <fieldset>
            <legend>Form</legend>
            <form onSubmit={handleForm}>
                <label>Search for </label>
                    <select onChange={(e)=> setPlanetsID(e.target.value)} value={planetsID}>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        <option>people</option>
                        <option>planets</option>
                    </select>
                <label> id: </label>
                    <input onChange={(e)=>setPeopleID(e.target.value)} value={peopleID} />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                <button>Search</button>
            </form>
        </fieldset>
    )
}

export default Form