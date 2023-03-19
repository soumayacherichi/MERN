import React, {useState} from 'react'
import Display from './Display'
let newUser = null
const Form = (props) => {
    // Every input must have a state variable
    const [username,setUsername]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [usernameError, setUsernameError]=useState(false)
    const [emailError, setEmailError]=useState(false)
    const [passwordError, setPasswordError]=useState(false)

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
    //Username Validation 
    const handleUsername = (e)=>{
        e.preventDefault()
        setUsername(e.target.value)
        console.log("The value =", e.target.value)
        if (e.target.value.length<3){
            console.log("Username must be more than 3");
            setUsernameError(true)

        }
        else {
            console.log("Username is more than");
            setUsernameError(false)
        }
    }
    //Email Validation 
    const handleEmail = (e)=>{
        e.preventDefault()
        setEmail(e.target.value)
        console.log("The value =", e.target.value)
        if (e.target.value.length<3){
            console.log("Email must have @ and .com");
            setEmailError(true)

        }
        else {
            console.log("Username is true");
            setEmailError(false)
        }
    }
    //Password Validation 
    const handlePassword = (e)=>{
        e.preventDefault()
        setPassword(e.target.value)
        console.log("The value =", e.target.value)
        if (e.target.value.length<3){
            console.log("Email must more than 3 characters");
            setPasswordError(true)

        }
        else {
            console.log("Username is true");
            setPasswordError(false)
        }
    }
  return (
    <div><fieldset>
        <legend>Form.jsx</legend>
        <h5>Username: {JSON.stringify(username)}</h5><br/>
        <h5>Email:{JSON.stringify (email)}</h5><br/>
        <h5>Password: {JSON.stringify(password)}</h5><br/>
        <hr/>
        <form onSubmit={formHandler}>
        <div>
            <label htmlFor="">Username: </label>
            <input onChange={(e)=>{handleUsername(e)}} value={username}/>
            {/* //double binding */}
            {usernameError? <p style ={{color :"red"}}>Name must be more than 3 characters </p>:null}
        </div> 
        <div>
            <label htmlFor="">Email: </label>
            <input onChange={(e)=>{handleEmail(e)}} value={email}/>
            {emailError? <p style ={{color :"red"}}>Name must be more than 3 characters </p>:null}

        </div> 
        <div>
            <label htmlFor="">Password: </label>
            <input onChange={(e)=>{handlePassword(e)}} value={password}/>
            {passwordError? <p style ={{color :"red"}}>Name must be more than 3 characters </p>:null}

{/* //value c'est la state variable */}
        </div>
        <br/>
        <input type="submit" value="Create user" />           
        </form>
        <Display user={newUser}/>
        </fieldset>
        </div>
        )
}

export default Form