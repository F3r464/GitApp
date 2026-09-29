function UserCard({ nombre, correo, ciudad, empresa }) {
  return (
    <div 
      className="user-card" 
      style={{
        border: '1px solid #444',
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: '#1e1e1e',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}
    >
      <h3 style={{ margin: '0 0 5px 0', color: '#fff', fontSize: '1.3rem' }}>
        {nombre}
      </h3>
      
      <p style={{ margin: 0, color: '#aaa', fontSize: '0.95rem' }}>
        <strong>Correo:</strong> {correo}
      </p>
      
      <p style={{ margin: 0, color: '#aaa', fontSize: '0.95rem' }}>
        <strong>Ciudad:</strong> {ciudad}
      </p>
      
      <p style={{ margin: 0, color: '#646cff', fontSize: '0.95rem', fontWeight: 'bold' }}>
        <strong>Empresa:</strong> {empresa}
      </p>
    </div>
  )
}

export default UserCard
