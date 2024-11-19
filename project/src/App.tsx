import React from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main>
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;