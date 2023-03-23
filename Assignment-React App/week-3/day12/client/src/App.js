import './App.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom';
import Main from './components/Main' 
import Create from './components/Create';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
      <h1> 🗒️🗒️ Notes 🗒️🗒️</h1><br/>
      <Link className = "btn btn-secondary" to ="/">Home</Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Link className = "btn btn-primary" to ="/create">Create</Link>
      <hr/>
      <Routes>
        <Route path="/notes" element ={<Main/>}/>
        <Route path="/create" element ={<Create/>}/>
        <Route path="/notes/edit/:id" element ={<Update/>}/>
        <Route path="*" element = {<Navigate to= "/notes" replace/>}/>
      </Routes>
    </div>
  );
}

export default App;
