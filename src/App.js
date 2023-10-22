import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/MicroservicioEstudiantes/Login.js';
import Register from './components/MicroservicioEstudiantes/Register';
import Welcome from './components/MicroservicioEstudiantes/WelcomeApp';
import Prueba from './components/prueba';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/prueba" element={<Prueba/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
