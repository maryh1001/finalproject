import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS': 
      return {
        workouts: action.payload
      }
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts]
      }
    case 'DELETE_WORKOUT':
      return {
        // filter through the current workouts on the current state and return true if you want it to remain in the new array and false if not
        //where they are not equal you want then we want to keep those particular workouts in the array
        workouts: state.workouts.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

//children property represents whatever components the component(WorkoutsContextProvider in this case) that is accepting the props wraps
export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
  })

  return (
    //makes it to where every components has access to this context
    <WorkoutsContext.Provider value={{...state, dispatch}}>
      { children }
    </WorkoutsContext.Provider>
  )
}