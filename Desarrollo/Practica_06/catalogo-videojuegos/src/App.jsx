// src/App.jsx
import { useState, useEffect } from 'react'
import UserCard from './components/UserCard'
import './App.css'

function App() {
  // Requisito 4: Almacenar los resultados mediante useState
  const [usuarios, setUsuarios] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [estaCargando, setEstaCargando] = useState(true)

  // Requisito 1 y 2: Componente que obtiene la informacion inicial con useEffect
  useEffect(() => {
    // Requisito 3: Utilizar fetch() para obtener los datos de la API publica
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setUsuarios(datos)
        setEstaCargando(false) // Apaga el mensaje de carga
      })
      .catch(error => {
        console.error('Error al descargar los usuarios:', error)
        setEstaCargando(false)
      })
  }, []) // Arreglo vacio para que solo busque una vez al encender la pagina

  // Requisito 10: Actualizar dinamicamente la lista mostrada segun el texto ingresado
  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(busqueda.toLowerCase())
  )

  const integrantes = "Fer Lau Eri"

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      
      {/* Encabezado */}
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '5px' }}>
          Directorio de Usuarios Completo
        </h1>
        <p style={{ color: '#888', fontSize: '1.1rem' }}>
          Ejercicio 4 - Equipo: <strong>{integrantes}</strong>
        </p>
      </header>

      {/* Requisito 9: Incorporar un campo que permita buscar un usuario por nombre */}
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Buscar usuario por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '12px 20px',
            borderRadius: '25px',
            border: '1px solid #555',
            backgroundColor: '#1a1a1a',
            color: 'white',
            fontSize: '1rem'
          }}
        />
      </div>

      {/* Requisito 5: Mostrar un mensaje de carga mientras se procesa la solicitud */}
      {estaCargando ? (
        <p style={{ color: '#646cff', fontStyle: 'italic', textAlign: 'center', fontWeight: 'bold' }}>
          Cargando el directorio desde internet...
        </p>
      ) : (
        /* Requisito 8: Utilizar map() y key correctamente */
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}
        >
          {usuariosFiltrados.length > 0 ? (
            usuariosFiltrados.map((usuario) => (
              <UserCard
                key={usuario.id} // Uso de la llave unica requerida
                nombre={usuario.name}
                correo={usuario.email}
                ciudad={usuario.address.city}
                empresa={usuario.company.name}
              />
            ))
          ) : (
            /* Requisito 11: Mostrar un mensaje cuando no existan coincidencias */
            <p style={{ gridColumn: '1/-1', color: '#888', fontStyle: 'italic', textAlign: 'center', marginTop: '20px' }}>
              No se encontraron usuarios que coincidan con tu busqueda.
            </p>
          )}
        </div>
      )}

    </div>
  )
}

export default App
