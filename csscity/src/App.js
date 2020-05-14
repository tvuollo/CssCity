import React from 'react';

import "./App.scss";

import Wall from './Components/Buildings/Skyscraper1/Wall';
import Canvas from './Components/Canvas/Canvas';

function App() {
  return (
    <div className="App">
      <div style={{padding:20}}>
        <Wall />        
      </div>
        <Canvas />
    </div>
  );
}

export default App;
