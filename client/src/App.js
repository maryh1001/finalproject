import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

import SwitchButton from './components/Button'

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const { user } = useAuthContext()


  return (
    <div className={`App ${darkMode ? "App-dark" : "App-light"}`}>
      <BrowserRouter>
        <Navbar />
        <SwitchButton />
        <div className={`pages ${darkMode ? "pages-dark" : "pages-light"}`}>
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />}  />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}  />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
      <div>
      </div>
    
      
    </div>
  );
}

export default App;
