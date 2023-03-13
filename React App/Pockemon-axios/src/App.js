import './App.css';
import { useState} from 'react';
function App() {
  const [axiosSuperHerosArray, setAxiosSuperHerosArray] = useState([])

  // - fetch Vanilla JS
  const axiosSuperHeros = ()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response=> {
      setAxiosSuperHerosArray(response.data)
      console.log(response.data)
    }).catch(error=>console.log(error))
  }
  return (
    <div className="App">
      <h1>Pockemon API</h1>
      <button onClick={axiosSuperHeros}>axios Pokemon</button>
      <h4>Axios</h4>
      <table style={{backgroundColor:'silver'}}>
        <thead>
          <tr>  
            <th>Hero Name</th>
          </tr>
        </thead>
        <tbody>
          {
            axiosSuperHerosArray.map(hero => {
              return (
                <tr>
                  <td>{hero.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
