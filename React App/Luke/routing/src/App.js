import './App.css';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import People from './components/People';
import Form from './components/Form';
import Error from './components/Error';
function App() {
  return (
    <div className="App">
      <Link to={"/home"}>Home(Link)</Link>
      <Form/>
      <br />
      <Routes>
        {/* <Route path='/' el */}
        <Route path='/home' element = {<Home/>}/>
        <Route path='/people/:peopleID' element={<People/>}/>
        <Route path='/error' element={<Error/>}/>
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
