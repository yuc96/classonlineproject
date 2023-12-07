import React, { useState } from 'react';
import './Register';

const Register = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const createStudent = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    try {
      const response = await fetch('https://learning-platform-backend.onrender.com/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });

      if (response.ok) {
        // La solicitud se completó con éxito
        const data = await response.json();
        // Maneja la respuesta de la API, por ejemplo, muestra un mensaje de éxito
      } else {
        // La solicitud falló
        // Maneja el error, por ejemplo, muestra un mensaje de error
      }
    } catch (error) {
      // Error en la solicitud
      // Maneja el error, por ejemplo, muestra un mensaje de error
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={createStudent} className="register-form">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={student.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={student.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={createStudent}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;



