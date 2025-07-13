import React from 'react';
import Messages from './Messages';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">WhatsApp Clone</h1>
        </div>
      </header>

      {/* Messages Component */}
      <main>
        <Messages />
      </main>
    </div>
  );
}

export default App;