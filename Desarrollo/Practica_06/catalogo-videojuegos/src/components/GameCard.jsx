function GameCard({ id, nombre, descripcion, categoria, esFavorito, onAlternarFavorito }) {
  return (
    <div 
      className="game-card" 
      style={{
        border: esFavorito ? '2px solid #e91e63' : '1px solid #444',
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: '#1e1e1e',
        textAlign: 'left',
        boxShadow: esFavorito ? '0 0 15px rgba(233, 30, 99, 0.3)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'between'
      }}
    >
      <div>
        <span style={{ 
          fontSize: '0.75rem', 
          backgroundColor: '#333', 
          color: '#646cff', 
          padding: '4px 8px', 
          borderRadius: '4px', 
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>
          {categoria}
        </span>
        <h3 style={{ margin: '12px 0 6px 0', color: '#fff', fontSize: '1.4rem' }}>
          {nombre} {esFavorito && '❤️'}
        </h3>
        <p style={{ color: '#aaa', fontSize: '0.95rem', margin: '0 0 20px 0', lineHeight: '1.4' }}>
          {descripcion}
        </p>
      </div>
      <button
        type="button"
        onClick={() => onAlternarFavorito(id)}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: esFavorito ? '#e91e63' : '#646cff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: 'auto',
          transition: 'background-color 0.2s'
        }}
      >
        {esFavorito ? '💔 Quitar de Favoritos' : '⭐ Añadir a Favoritos'}
      </button>
    </div>
  )
}

export default GameCard
