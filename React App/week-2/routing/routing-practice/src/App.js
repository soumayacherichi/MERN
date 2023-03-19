import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Number from './components/Number';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/Home' element = {<Home/>}/>
      <Route path='/:numb' element = {<Number/>}/>
      <Route path='/:numb/:bc/:color' element = {<Number/>}/>
      
      
      </Routes>
    </div>
  );
}

export default App;
