import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/MicroservicioEstudiantes/Login.js';
import Register from './components/MicroservicioEstudiantes/Register';
<<<<<<< HEAD
import Nav from './components/Nav.js'
import AboutUs from './components/AboutCompany/AboutUs.js';
import Footer from './components/Footer.js';
=======
import Welcome from './components/MicroservicioEstudiantes/WelcomeApp';
import Prueba from './components/prueba';
>>>>>>> 7acdbbb7b16a9d0401c369dc9eb8c604005e3e45
function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route exact path="/" element={<AboutUs/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/prueba" element={<Prueba/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
