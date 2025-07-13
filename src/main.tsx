import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add error handling for React mounting
console.log('Starting React app initialization...');

try {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  console.log('Root element found, creating React root...');
  
  const root = createRoot(rootElement);
  
  console.log('React root created, rendering app...');
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  
  console.log('React app rendered successfully!');
  
} catch (error) {
  console.error('Error initializing React app:', error);
  
  const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
  
  // Fallback error display
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="
        min-height: 100vh;
        background: #000;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: system-ui, -apple-system, sans-serif;
        text-align: center;
        padding: 2rem;
      ">
        <div>
          <h1 style="color: #ef4444; margin-bottom: 1rem;">React Initialization Error</h1>
          <p style="margin-bottom: 1rem;">Failed to mount React application</p>
          <p style="font-size: 0.875rem; color: #666;">Error: ${errorMessage}</p>
          <button onclick="location.reload()" style="
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background: #3b82f6;
            color: white;
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
          ">Reload Page</button>
        </div>
      </div>
    `;
  }
}
