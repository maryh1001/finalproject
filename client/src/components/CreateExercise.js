import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('0');
    const [date, setDate] = useState(new Date());
    
    const handleDatePicker = (date) => {
      setDate(date)
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(username);
        console.log(description);
        console.log(duration);
        console.log(date);
    
        window.location = '/exercises'
    };

    return(
        <div>
          <h3>Add a New Exercise</h3>
          <form onSubmit={ handleSubmit }>
            <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={ username }
                    onChange={ event => setUsername(event.target.value) }
                />
            </div>
            <div className="form-group"> 
              <label>Description: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={ description }
                  onChange={ event => setDescription(event.target.value) }
                  />
            </div>
            <div className="form-group">
              <label>Duration (in minutes): </label>
              <input 
                  type="number" 
                  className="form-control"
                  value={ duration }
                  onChange={ event => setDuration(event.target.value) }
                  />
            </div>
            <div className="form-group">
              <label>Date: </label>
              <div>
                <DatePicker
                  selected={ date }
                  onChange={ handleDatePicker }
                />
              </div>
            </div>
    
            <div className="form-group">
              <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
            </div>
          </form>
        </div>

    )
}

export default CreateExercise;


