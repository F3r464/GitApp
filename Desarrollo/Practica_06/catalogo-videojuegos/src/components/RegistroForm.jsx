import { useState } from 'react'
function RegistroForm({ onAgregarRegistro }) {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [rol, setRol] = useState('Usuario') 
  const manejarEnvio = (event) => {
    event.preventDefault() 
    if (!nombre.trim() || !correo.trim()) {
      alert('Por favor, completa los campos requeridos.')
      return
    }
    const nuevoRegistro = {
      id: Date.now(),
      nombre,
      correo,
      rol
    }
    onAgregarRegistro(nuevoRegistro)
    setNombre('')
    setCorreo('')
    setRol('Usuario')
  }

  return (
    <form onSubmit={manejarEnvio} style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '12px', maxWidth: '450px', margin: '20px auto', textAlign: 'left', border: '1px solid #444' }}>
      <h3 style={{ marginTop: 0, color: '#e91e63' }}>Formulario de Registro</h3>
        <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Nombre Completo:</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          placeholder="Ej. Emu Otori"
          style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #555', backgroundColor: '#121212', color: 'white' }}
        />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Correo Electrónico:</label>
        <input 
          type="email" 
          value={correo} 
          onChange={(e) => setCorreo(e.target.value)} 
          placeholder="correo@gmail.com"
          style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #555', backgroundColor: '#121212', color: 'white' }}
        />
      </div>

      <div style={{ marginBottom: '18px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Rol del Sistema:</label>
        <select 
          value={rol} 
          onChange={(e) => setRol(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #555', backgroundColor: '#121212', color: 'white' }}
        >
          <option value="Usuario">Usuario Estándar</option>
          <option value="Administrador">Administrador</option>
          <option value="Desarrollador">Desarrollador</option>
        </select>
      </div>

      <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#e91e63', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
        Enviar Registro
      </button>
    </form>
  )
}

export default RegistroForm
