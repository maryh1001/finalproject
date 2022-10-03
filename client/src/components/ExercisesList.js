import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function ExercisesList() {  
    const [exercises, setExercises] = useState({
      exercises: []
    })

    const getExercises = async() => {
      try {
        const response = await axios.get('http://localhost:3000/exercises/');
        setExercises(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getExercises(exercises)
    }, [ exercises ])

    
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    )

}

export default ExercisesList;