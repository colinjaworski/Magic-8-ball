import { useState } from 'react';
import './App.css';

function App() {

  function eightBall() {
    console.log('sup bitch?')
  }

  return (
    <>
      <header className="Header">
        <h1>Magic 8 ball time!</h1>
      </header>
      <div className="App">
        <div>
          <input type="text" />
          <button onClick={eightBall}>Shake the ball!</button>

        </div>
      </div>
    </>
  );
}

export default App;
