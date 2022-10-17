import { useState, useContext } from "react"
import { useLogin } from "../hooks/useLogin"
import { ThemeContext } from '../context/ThemeContext'

const Login = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className={`login ${darkMode ? "login-dark" : "login-light"}`} onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login