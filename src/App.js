import React from 'react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import './index.css';

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <TabNavigation />
    </div>
  );
}

export default App;
