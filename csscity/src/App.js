import React, { useState } from 'react';

import "./App.scss";

import CanvasView from './Views/CanvasView';
import SpritesView from './Views/SpritesView';

const App = () => {

  const [view, setView] = useState("sprites");

  return (
    <div className="App">

      <nav class="nav">
        <button
          className="nav__button"
          disabled={view == "sprites"}
          onClick={() => setView("sprites")}
        >
          Sprites
          </button>
        <button
          className="nav__button"
          disabled={view == "canvas"}
          onClick={() => setView("canvas")}
        >
          Canvas
        </button>
      </nav>

      {view == "sprites" &&
        <SpritesView />
      }
      {view == "canvas" &&
        <CanvasView />
      }
    </div>
  );

}

export default App;
