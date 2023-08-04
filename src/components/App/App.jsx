import { useState, useEffect } from 'react';
import './App.css';




function App() {

  const [eightBall, setEightBall] = useState('');
  const [toggleBtn, setToggleBtn] = useState(true);

  function toggleColor() {
    setToggleBtn(!toggleBtn);
    console.log('this is the btn state: ', toggleBtn)
  }

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

  }

  return (
    <>
      <header className="Header">
        <h1>Call me now, fer ya free trial reedin'</h1>
      </header>
      <div className="App">
        <div>
          <input type="checkbox" id="btnControl" />
          <label class="btn" for="btnControl">
            <img onAnimationEnd={eightBallFunction} src="https://i5.walmartimages.com/asr/c3698a59-0624-4f8d-9e27-258139feb08c_1.9a6988dd9ed990c81dcab7afc9a37834.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
              id="eightBall" height={400} width={400} />
          </label>
          <h1 id="response" onClick={toggleColor} style={{ background: toggleBtn ? "" : "red" }}>{eightBall}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
