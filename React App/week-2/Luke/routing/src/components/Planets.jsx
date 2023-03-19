import React,{useState, useEffect} from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import axios from 'axios'
const Planets = (props) => {
    const [planets, setPlanets] = useState(null)
    const {planetsID} =useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${planetsID}`)
        .then(response=>{
            console.log(response.data);
            setPlanets(response.data)
        }).catch(error=> {
            console.log(error)
            navigate('/error')
        })
    }, [planetsID, navigate])
  return (
    <fieldset>
        <legend>Planets</legend>
        {planets ?
        <>
            <h3>Planets Number : {planetsID} -- Name : {planets.name}</h3>
            <div style={{
                display: 'inline-flex', border:'1px solid black',
                padding:'5px' , borderRadius:'15px'
            }}>
                <div>
                    <h4>{planets.name}</h4>
                    <h4>Height : {planets.terrain}</h4>
                    <h4>Mass:  {planets.climate}</h4>
                    <h4>Hair color:  {planets.surface_water ? "true": "false"}</h4>
                    <h4>Skin Color:  {planets.population}</h4>              
                </div>
            </div>
        </> : <h3>Loading ...... </h3> }

    </fieldset>
  )
}

export default Planets