import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Form = (props) => {
    const navigate = useNavigate()
    const [peopleID, setPeopleID] = useState(1)
    const handleForm = (e)=>{
        e.preventDefault()
        console.log("People ID = ", peopleID);
        navigate(`/people/${peopleID}`)
        // setPeopleID(1)
    }
    return (
        <fieldset>
            <legend>Form</legend>
            <form onSubmit={handleForm}>
                <label for="people">Choose people:</label>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                <input onChange={(e)=>setPeopleID(e.target.value)} value={peopleID} />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                <button style={{backgroundColor:"blue"}}>Search</button>
            </form>
        </fieldset>
    )
}

export default Form