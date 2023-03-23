import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Main = (props) => 
{
    const [notes, setNotes]= useState(null)
    const navigate = useNavigate()
    useEffect(() =>{
        axios.get ("http://127.0.0.1:8000/api/notes")
        .then(res=>{
            console.log("Server Response ",res.data)
            setNotes(res.data.allNotes)
        })
        .catch(err=>console.log(err))
    },[]);
    const deleteNote=(id) =>{
        axios.delete(`http://127.0.0.1:8000/api/notes/${id}`)
        .then(res=>{
                console.log("Note deleted ✅✅",res.data)
                setNotes(notes.filter((note)=>note._id!==id))
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
      {notes ? notes.map(note=>
        <div key ={note._id}>
            <h4>{note.isImportant ? "🎯":""}{note.title}</h4>
            <p>{note.content}</p>
            <p>{note.createdAt}</p>
            <button onClick ={()=>navigate(`/notes/edit/${note._id}`)} className='btn btn-warning'>Edit </button> &nbsp; &nbsp; &nbsp;
            <button onClick = {()=>{deleteNote(note._id)}} className='btn btn-danger'>Delete </button>
            <hr/>
            </div>
            ):"Loading......"}
    </div>
  )
}

export default Main