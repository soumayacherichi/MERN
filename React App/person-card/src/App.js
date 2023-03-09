import './App.css';
import PersonCard from "./components/PersonCard";
function App() 
{
  var user =[
    {"first_Name":"Soumaya", "last_Name":"Cherichi", "age":35, "hairColor":"Brown"},
    {"first_Name":"Mariem", "last_Name":"Cherichi","age":38,"hairColor":"yellow"},
    {"first_Name":"Oussama", "last_Name":"Cherichi","age":40,"hairColor":"Brown"},
    {"first_Name":"Mohamed", "last_Name":"Ouergli","age":37,"hairColor":"Black"}
  ]
  return (
    <div className="App">

    {user.map(person => {
      return <PersonCard first_Name={person.first_Name} last_Name={person.last_Name} age={person.age} hairColor={person.hairColor} />
    })

}

  </div>
  );
}

export default App;
