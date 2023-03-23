import React , {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Create = (props) => {
    //définition des states variables on aurait pu le faire chacun dans une ligne 
    const [note, setNote] = useState({title:"",content:"", isImportant:false})
    const [errors,setErrors]= useState([])
    const [errorObject, setErrorObject] = useState({})
    const navigate = useNavigate()
    const createNote= (e)=>
    {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/notes", note)
        .then(res=>
            {
            console.log("✅✅✅✅Client Success ✅✅✅✅",res.data)
            navigate("/notes")
            })
        .catch (err=>{
            console.log("❌❌❌",err.response.data)
            setErrorObject(err.response.data)
            const errorsArr=[]
            for (const key of Object.keys(err.response.data)) // on a créer ce table bech najjem nmapi 3lih w n5arrej mennou les erreurs pour chque input 
            {
                errorsArr.push(err.response.data[key].message);
            }
            setErrors(errorsArr);

            
        })
    }
  return (
    <div className='container m-6'>
        {/* <div >{errors.map(err=> <p className='text-danger'>{err}</p>)}</div> */}
        <form onSubmit={createNote}>
           <div className='form-group'>
                <label htmlFor ="">Title</label>
                {errorObject.title?<p className='text-danger'>{errorObject.title.message}</p>:""}
                <input className='form-control' onChange={(e)=>setNote({...note, title:e.target.value})} 
                value={note.title}/>
            </div>
            <div className='form-group'>
            <label htmlFor ="">Content</label>
            {errorObject.content?<p className='text-danger'>{errorObject.content.message}</p>:""}
            <input className='form-control'onChange={(e)=>setNote({...note, content:e.target.value})} 
                value={note.content}/>
            </div>
            <div className='form-group'>
            <input type="checkbox" onChange={(e)=>setNote({...note,isImportant:e.target.checked})}
            value={note.isImportant}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor ="">Is Important</label>
            </div>
            <br/>
            <input type ="submit" className='btn btn-success' value ="Create"/>
        </form>

        
    </div>
  )
}

export default Create