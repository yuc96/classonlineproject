import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/MicroservicioEstudiantes/Login.js';
import Register from './components/MicroservicioEstudiantes/Register';
import Nav from './components/Nav.js'
import AboutUs from './components/AboutCompany/AboutUs.js';
import Footer from './components/Footer.js';
function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route exact path="/" element={<AboutUs/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
