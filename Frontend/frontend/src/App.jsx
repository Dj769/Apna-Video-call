import { useState } from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing'
import { AuthProvider } from './contexts/AuthContext.jsx'
import Authentication from './pages/authentication.jsx';
import VideoMeetComponent from './pages/VideoMeet.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Router>

        <AuthProvider>
        <Routes>

            <Route path='/' element={<LandingPage/>}/>

            <Route path='/auth' element={<Authentication/>}/>

            <Route path='/:url' element={<VideoMeetComponent/>} />

        </Routes>

        </AuthProvider>
      </Router>
    </>
  )
}

export default App
