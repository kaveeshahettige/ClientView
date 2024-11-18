
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';



function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
