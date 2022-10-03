import { useState } from 'react';
import axios from 'axios';

function CreateExercise() {

    const [exercise, setExercise] = useState({
      username: '',
      description: '',
      duration: '0',
      date: new Date(),
    })
    

    const handleSubmit = event => {
        event.preventDefault();

        const newExercise = {
          username: exercise.username,
          description: exercise.description,
          duration: exercise.duration,
          date: exercise.date
        }

        console.log(newExercise);

        /*  this is not working
        axios.post('http://localhost:3000/exercises/add', exercise)
          .then(res => console.log(res.data)); 
        */

        window.location = '/exercises'

    
        
    };

    return(
        <div>
          <h3>Add a New Exercise</h3>
          <form onSubmit={ handleSubmit }>
            <div className="form-group"> 
                <label>Mood: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={ exercise.username }
                    onChange={ event => {
                      setExercise({ ...exercise, username: event.target.value })
                    } }
                />
            </div>
            <div className="form-group"> 
              <label>Description: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={ exercise.description }
                  onChange={ event => {
                    setExercise({ ...exercise, description: event.target.value })
                  } }
                  />
            </div>
            <div className="form-group">
              <label>Duration (in minutes): </label>
              <input 
                  type="number" 
                  className="form-control"
                  value={ exercise.duration }
                  onChange={ event => {
                    setExercise({ ...exercise, duration: event.target.value })
                  } }
                />
            </div>
            <div className="form-group">
              <label>Date: </label>
              <input 
                  type="date" 
                  className="form-control"
                  value={ exercise.date }
                  onChange={ event => {
                    setExercise({ ...exercise, date: event.target.value })
                  } }
                />
            </div>
    
            <div className="form-group">
              <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
            </div>
          </form>
        </div>

    )
}

export default CreateExercise;


