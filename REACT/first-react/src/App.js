import SomeClassComponent from "./components/SomeClassComponent";
import './App.css';
function App() {
const message= 'hi iam a javascript code'
const age = 25
const animals  = [
  "leopard 🐆", "giraffe 🦒","zebra 🦓", 
  "elephant 🐘", "monkey 🐵", "lion 🦁", 
  "racoon 🦝","rabbit 🐰","hamster 🐹"
];
const user = {
  name :"John",
  favFood :"🍕",
  age:45
}
return (
  <div className="App">
    <fieldset>
      <legend>☸☸    App.js     ☸☸</legend>
      <h1>Hello from App.js</h1>
      <h2>H2 from App.js </h2>
      <h4>John From App.js {JSON.stringify(user)}</h4>
      {/* <h4>{message}</h4>
      <h4>User Age  = {age}</h4>
      {animals.map((animal, index)=>{
        return (
          <li key ={index}>{animal}</li>
        )
      })} */}
      
      {/* <h4>{JSON.stringify(user)}</h4> */}
      {/* <h5>User Name = {user.name}</h5>
      <h5>User Favorite Food = {user.favFood}</h5> */}
    <SomeClassComponent  msg = {message} john = {user} favNumber = {7}/>
    <SomeClassComponent  msg = {message} john = {user} favNumber = {7}/>
    </fieldset>
    
  </div>
);
}

export default App;
