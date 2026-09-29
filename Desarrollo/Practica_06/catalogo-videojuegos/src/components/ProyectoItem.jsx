function ProyectoItem({ id, nombre, descripcion, estado, onCambiarEstado, onEliminar }) {
  const darColorEstado = (est) => {
    if (est === 'Pendiente') return { color: '#ff9800', fondo: 'rgba(255, 152, 0, 0.15)', texto: 'Pendiente' }
    if (est === 'En Progreso') return { color: '#2196f3', fondo: 'rgba(33, 150, 243, 0.15)', texto: 'En Progreso' }
    return { color: '#4caf50', fondo: 'rgba(76, 175, 80, 0.15)', texto: 'Completado' }
  }

  const estiloEstado = darColorEstado(estado)

  return (
    <div 
      className="proyecto-card" 
      style={{
        border: '1px solid #444',
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: '#1e1e1e',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <span style={{ 
          fontSize: '0.8rem', 
          color: estiloEstado.color, 
          backgroundColor: estiloEstado.fondo,
          padding: '4px 10px', 
          borderRadius: '20px', 
          fontWeight: 'bold'
        }}>
          {estiloEstado.texto}
        </span>

        <h3 style={{ margin: '15px 0 8px 0', color: '#fff' }}>{nombre}</h3>
        <p style={{ color: '#aaa', fontSize: '0.95rem', margin: '0 0 20px 0', lineHeight: '1.4' }}>
          {descripcion}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
        <button
          type="button"
          onClick={() => onCambiarEstado(id)}
          style={{
            flex: 1,
            padding: '8px',
            backgroundColor: '#646cff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Siguiente Estado
        </button>

        <button
          type="button"
          onClick={() => onEliminar(id)}
          style={{
            padding: '8px 12px',
            backgroundColor: '#ff4d4d',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Borrar
        </button>
      </div>
    </div>
  )
}

export default ProyectoItem
