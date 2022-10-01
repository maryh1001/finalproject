
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import ExercisesList from './components/ExercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container'> 
        <Navbar />
        <br/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/exercises" element={<ExercisesList/>} />
          <Route exact path="/edit/:id" element={<EditExercise/>} />
          <Route exact path="/create" element={<CreateExercise/>} />
          <Route exact path="/user" element={<CreateUser/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
