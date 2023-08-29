import './App.css'

function App() {
  const estudiantes = [
    {
      id: 1,
      name: "Juan",
      age:32,
      nota: 6
    },
    {
      id: 2,
      name: "Sofia",
      age: 23,
      nota: 9
    },
    {
      id: 3,
      name: "Luciano",
      age: 26,
      nota: 3
    }
  ];
  const estAprobados = estudiantes.filter((estudiante) => estudiante.nota > 6);
  
  return (
    <div>
      <p>Listado de estudiantes</p>
      <ul>
        {
          estudiantes.map((estudiante) =>
            <li key={estudiante.id}>Nombre: {estudiante.name} - Edad: {estudiante.age}  </li>
          )
        }
      </ul>
      <p>Listado de estudiantes aprobados</p>
      <ul>
        {
          estAprobados.map((estudiante) => (
            <li key={estudiante.id}>Nombre: {estudiante.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
