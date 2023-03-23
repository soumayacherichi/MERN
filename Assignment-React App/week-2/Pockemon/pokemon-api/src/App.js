import './App.css';
import { useState} from 'react';
function App() {
  const [fetchSuperHerosArray, setFetchSuperHerosArray] = useState([])

  // - fetch Vanilla JS
  const fetchSuperHeros = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807") 
      .then(response => response.json())
      .then(response => {
        setFetchSuperHerosArray(response.results)
        console.log(response[0])
      })
      .catch(error => console.log(error))
  }
  return (
    <div className="App">
      <h1>SuperHeros API</h1>
      <button onClick={fetchSuperHeros}>fetch SuperHeros</button>
      <h4>Fetch SuperHeros</h4>
      <table>
        <thead>
          <tr>
            <th>Hero Name</th>
          </tr>
        </thead>
        <tbody>
          {
            fetchSuperHerosArray.map(hero => {
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
