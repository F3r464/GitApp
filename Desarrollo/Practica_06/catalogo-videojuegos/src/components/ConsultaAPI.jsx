import { useState, useEffect } from 'react'

function ConsultaAPI() {
  const [datosApi, setDatosApi] = useState([])
  const [cargando, setCargando] = useState(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setDatosApi(data)
        setCargando(false)
      })
      .catch(error => {
        console.error('Error al consultar la API:', error)
        setCargando(false)
      })
  }, [])

  if (cargando) {
    return (
      <div style={{ margin: '30px auto', textAlign: 'center' }}>
        <p style={{ color: '#646cff', fontStyle: 'italic', fontWeight: 'bold' }}>
           Cargando información desde la API externa...
        </p>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '500px', margin: '30px auto', textAlign: 'left', backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '12px', border: '1px solid #444' }}>
      <h3 style={{ marginTop: 0, color: '#4caf50' }}> Usuarios </h3>
            <ul style={{ paddingLeft: '15px', margin: 0, color: '#ccc' }}>
        {datosApi.map(item => (
          <li key={item.id} style={{ marginBottom: '10px', listStyleType: 'square' }}>
            <strong style={{ color: '#fff' }}>{item.name}</strong> 
            <br />
            <span style={{ fontSize: '0.85rem', color: '#888' }}> {item.email} |  Ciudad: {item.address.city}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ConsultaAPI
