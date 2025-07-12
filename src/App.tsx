import React from 'react';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1f2937, #000000)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '600px', padding: '2rem' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Rennet Mathew
        </h1>
        <h2 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '2rem',
          color: '#94a3b8'
        }}>
          AI/ML Enthusiast | Python Developer
        </h2>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '1rem',
          padding: '2rem'
        }}>
          <h3 style={{ color: '#60a5fa', marginBottom: '1rem' }}>
            🚀 Portfolio Loading Test
          </h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            This is a simplified test version. If you can see this message, 
            the React app is working correctly on Vercel.
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              background: 'rgba(59, 130, 246, 0.2)',
              padding: '1rem',
              borderRadius: '0.5rem'
            }}>
              <div style={{ fontWeight: 'bold', color: '#93c5fd' }}>✅ React Working</div>
              <div style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>Components rendering</div>
            </div>
            <div style={{
              background: 'rgba(34, 197, 94, 0.2)',
              padding: '1rem',
              borderRadius: '0.5rem'
            }}>
              <div style={{ fontWeight: 'bold', color: '#86efac' }}>✅ Vercel Deploy</div>
              <div style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>Build successful</div>
            </div>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
            Next: Restore full AI/ML portfolio components
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;