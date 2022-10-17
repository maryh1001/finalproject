import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


//destructure from the props that we pass through (the workout)
const WorkoutDetails = ({ workout }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className={`workout-details ${darkMode ? "workout-details-dark" : "workout-details-light"}`}>
      <h4>{workout.description}</h4>
      <p><strong>Duration (in minutes): </strong>{workout.duration}</p>
      <p><strong>Date: </strong>{workout.date}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails