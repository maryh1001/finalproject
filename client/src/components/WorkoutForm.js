import { useState, useContext } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'
import { ThemeContext } from '../context/ThemeContext'

const WorkoutForm = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const workout = {description, duration, date}

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    //if response is ok then reset all input fields so you can put in a new workout without having to delete the previous info 
    if (response.ok) {
      setDescription('')
      setDuration('')
      setDate('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }

  return (
    <form className={`form ${darkMode ? "form-dark" : "form-light"}`} onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Workout Description:</label>
      <input 
        type="text"
        onChange={(e) => setDescription(e.target.value)} //when a user types into this field they set the title
        value={description}
        className={emptyFields.includes('description') ? 'error' : ''} //conditional class... if empty fields does indeed include 'title' then give it a class of 'error' and if it is false then take away the class
      />

      <label>Duration (in minutes):</label>
      <input 
        type="number"
        onChange={(e) => setDuration(e.target.value)}
        value={duration}
        className={emptyFields.includes('duration') ? 'error' : ''}
      />

      <label>Date:</label>
      <input 
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        className={emptyFields.includes('date') ? 'error' : ''}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm