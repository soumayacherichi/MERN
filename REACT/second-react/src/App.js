import SomeClassComponent from "./components/SomeClassComponent";
import FirstFunctionalComponent from "./components/FirstFunctionalComponent"; 
import './App.css';
function App() {
const message= 'hi iam a javascript code'
const age = 25
const animals  = [
  "leopard π", "giraffe π¦","zebra π¦", 
  "elephant π", "monkey π΅", "lion π¦", 
  "racoon π¦","rabbit π°","hamster πΉ"
];
const user = {
  name :"John",
  favFood :"π",
  age:45
}
return (
  <div className="App">
    <fieldset>
      <legend>βΈβΈ    App.js     βΈβΈ</legend>
      <h1>Hello from App.js</h1>
      <h2>H2 from App.js </h2>
      <h4>John From App.js {JSON.stringify(user)}</h4>
    <SomeClassComponent  msg = {message} john = {user} favNumber = {7}/>
    <FirstFunctionalComponent msg = {message} john = {user} favNumber = {7}/>
    </fieldset>
    
  </div>
);
}

export default App;
