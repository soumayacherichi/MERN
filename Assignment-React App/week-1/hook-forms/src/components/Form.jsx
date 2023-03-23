import React, {useState} from 'react'
const Form = (props) => {
    // Every input must have a state variable
    const [username,setUsername]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const formHandler = (e)=>{
        //fonction pour enlever refresh preventdefault
        e.preventDefault()
        console.log(e);
        console.log("Form Submitted");
        // creation de newUser bech nsayviw fih les entrées bech najmou naba3thouhom lil backend
        const newUser={
        username:username,
        email:email,
        password:password
        }
        console.log(newUser);
        //hedhouma zednehom bech nfas5ou ba3d manab3eth il formulaire mte3i
        setUsername("")
        setEmail("")
        setPassword("")
    }
  return (
    <div><fieldset>
        <legend>Form.jsx</legend>
        <h5>Username: {JSON.stringify(username)}</h5><br/>
        <h5>Email:{JSON.stringify (email)}</h5><br/>
        <h5>Password: {JSON.stringify(password)}</h5><br/>
        <h5>Password: {JSON.stringify(password)}</h5><br/>
        <hr/>
        <form onSubmit={formHandler}>
        <div>
            <label htmlFor="">Username: </label>
            <input onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
            {/* //double binding */}
        </div> 
        <div>
            <label htmlFor="">Email: </label>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
        </div> 
        <div>
            <label htmlFor="">Password: </label>
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
{/* //value c'est la state variable */}
        </div>
        <br/>
        <input type="submit" value="Create user" />           
        </form>
        <hr/>
        </fieldset> 
        </div>
        )
}

export default Form