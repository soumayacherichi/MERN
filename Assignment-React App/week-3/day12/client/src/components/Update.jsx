import React , {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = (props) => 
{
    const [note, setNote] = useState({})
    const navigate = useNavigate()
    const {id} = useParams() // 5dhit l'id men l'url
    useEffect(()=>
    {
        //axios.get(`http://127.0.0.1:8000/api/notes/${id}`) or 
        axios.get("http://127.0.0.1:8000/api/notes/"+id)
        .then(res=>
        {
            console.log(res.data)
            setNote(res.data)
        })
        .catch(err=>console.log(err))
    },[id])//dependencies array n7ot fih id bech hakéka ki yetbadel id ijibli note specidifc lil id hedheka 
    const updateNote = (e)=>
    {
        e.preventDefault()
        console.log(note)
        axios.put("http://127.0.0.1:8000/api/notes/"+id, note)
        .then(res=>
            {
            console.log(res.data)
            navigate("/notes")
            })
        .catch(err=>console.log(err))
    }
  return (
    <div className='container m-6'>
        <h4>Note ID: {id}</h4>
        <form onSubmit={updateNote}>
           <div className='form-group'>
                <label htmlFor ="">Title</label>
                <input className='form-control' 
                onChange={(e)=>setNote({...note, title:e.target.value})} 
                value={note.title}
                />
            </div>
            <div className='form-group'>
            <label htmlFor ="">Content</label>
            <input className='form-control'
            onChange={(e)=>setNote({...note, content:e.target.value})} 
                value={note.content}
                />
            </div>
            <div className='form-group'>
            <input type="checkbox" 
            onChange={(e)=>setNote({...note,isImportant:e.target.checked})}
            checked={note.isImportant}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor ="">Is Important</label>
            </div>
            <br/>
            <input type ="submit" className='btn btn-success' value ="update"/>
        </form>

        
    </div>
  )
}

export default Update