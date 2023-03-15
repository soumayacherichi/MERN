import React,{useState, useEffect} from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import axios from 'axios'
const People = (props) => {
    const [people, setPeople] = useState(null)
    const {peopleID} =useParams()
    const navigate = useNavigate()
    const goBack = () =>{
        navigate(-1)
    }
    const goNext = ()=>{
        navigate(+1)
    }
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${peopleID}`)
        .then(response=>{
            console.log(response.data);
            setPeople(response.data)
        }).catch(error=> {
            console.log(error)
            navigate('/error')
        })
    }, [peopleID, navigate])
  return (
    <fieldset>
        <legend>People</legend>
        {/* <h2>people : {JSON.stringify(people)}</h2> */}
        <button onClick={()=>{goBack()}}>Previous</button> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        <button onClick={goNext}>Next</button>
        {people ?
        <>
            <h3>People Number : {peopleID} -- Name : {people.name}</h3>
            <div style={{
                display: 'inline-flex', border:'1px solid black',
                padding:'5px' , borderRadius:'15px'
            }}>
                <div>
                    <h4>{people.name}</h4>
                    <h4>Height : {people.height}</h4>
                    <h4>Mass:  {people.mass}</h4>
                    <h4>Hair color:  {people.hair_color}</h4>
                    <h4>Skin Color:  {people.skin_color}</h4>              
                </div>
            </div>
        </> : <h3>Loading ...... </h3> }

    </fieldset>
  )
}

export default People