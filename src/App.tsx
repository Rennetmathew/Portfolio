import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Test Header */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Rennet Mathew
          </h1>
          <p className="text-2xl text-white/80 mb-8">
            AI/ML Enthusiast | Python Developer
          </p>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              Portfolio is Loading...
            </h2>
            <p className="text-lg text-white/70 mb-6">
              This is a test version to debug the white screen issue. If you can see this message, React is working properly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-300">✅ React Loading</h3>
                <p className="text-sm text-white/60">Components are rendering</p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h3 className="font-semibold text-green-300">✅ Tailwind CSS</h3>
                <p className="text-sm text-white/60">Styles are working</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-white/50">
                If this loads successfully, we'll restore the full portfolio components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;