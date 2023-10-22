import React, { useState } from 'react';

function App() {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    age: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const createStudent = async () => {
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
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="Nombre"
        value={student.firstName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Apellido"
        value={student.lastName}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Edad"
        value={student.age}
        onChange={handleInputChange}
      />
      <button onClick={createStudent}>Crear Estudiante</button>
    </div>
  );
}

export default App;