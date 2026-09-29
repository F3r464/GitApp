// src/components/Filtro.jsx

function Filtro({ categoriaActiva, onCambiarCategoria }) {
  const categorias = ['Todos', 'RPG', 'Acción', 'Estrategia', 'Aventura']

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px 0 30px 0', flexWrap: 'wrap' }}>
      {categorias.map(cat => (
        <button
          key={cat}
          type="button"
          onClick={() => onCambiarCategoria(cat)}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid #555',
            backgroundColor: categoriaActiva === cat ? '#646cff' : '#1a1a1a',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.2s'
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default Filtro
