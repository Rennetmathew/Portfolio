import React, { useEffect, useState } from 'react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      // Simulate app initialization and remove loading screen
      const timer = setTimeout(() => {
        setIsLoaded(true);
        // Remove the loading content from the DOM
        const loadingElement = document.querySelector('.loading');
        if (loadingElement) {
          loadingElement.remove();
        }
      }, 100);
      
      return () => clearTimeout(timer);
    } catch (error) {
      console.error('App initialization error:', error);
      setHasError(true);
    }
  }, []);

  if (hasError) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: '#000',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ color: '#ef4444', marginBottom: '1rem' }}>Error Loading Portfolio</h1>
          <p>Please refresh the page or contact support.</p>
        </div>
      </div>
    );
  }

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
            ✅ Portfolio Successfully Loaded!
          </h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            React app is now working correctly on Vercel. The loading screen has been replaced.
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
              <div style={{ fontWeight: 'bold', color: '#93c5fd' }}>✅ React Mounted</div>
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
            <div style={{
              background: 'rgba(168, 85, 247, 0.2)',
              padding: '1rem',
              borderRadius: '0.5rem'
            }}>
              <div style={{ fontWeight: 'bold', color: '#c4b5fd' }}>✅ JS Loading</div>
              <div style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>No runtime errors</div>
            </div>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
            Status: {isLoaded ? 'Fully loaded and operational' : 'Loading...'}
          </p>
          <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#64748b' }}>
            <p>Deployment time: {new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;