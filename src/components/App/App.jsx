import { useState } from 'react';
import './App.css';

function App() {

  const [eightBall, setEightBall] = useState('');

  function eightBallFunction() {

    let randomNumber = Math.floor(Math.random() * 8);


    switch (randomNumber) {
      case 7: setEightBall('It is certain')
        break;
      case 6: setEightBall('It is decidedly so')
        break;
      case 5: setEightBall('Reply hazy try again')
        break;
      case 4: setEightBall('Cannot predict now')
        break;
      case 3: setEightBall('Do not count on it')
        break;
      case 2: setEightBall('My sources say no')
        break;
      case 1: setEightBall('Outlook not so good')
        break;
      case 0: setEightBall('Signs point to yes')
    }
    console.log(eightBall);

  }

  return (
    <>
      <header className="Header">
        <h1>Magic 8 ball time!</h1>
      </header>
      <div className="App">
        <div>
          <input type="text" />
          <button onClick={eightBallFunction}>Shake the ball!</button>
          <h1>{eightBall}</h1>

        </div>
      </div>
    </>
  );
}

export default App;
