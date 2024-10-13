import React from 'react';
import Counter from './components/Counter';

// import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px'}}>
      <h1>Redux Toolkit</h1>
      <Counter />
    </div>
  );
}

export default App;
