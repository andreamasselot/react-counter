import './App.css';
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">

      <header>
        <h1> <i class="fa-solid fa-calculator"></i> React Counter</h1>
      </header>
      <div className='container'>
        <div className='counter-container'>

          {counter > 0 ?
            <button className='count' onClick={() => {
              setCounter(counter - 1);
            }}>-</button> : <div className='count'></div>}

          <p className='numbers'>{counter}</p>

          {counter < 10 ?
            <button className='count' onClick={() => {
              setCounter(counter + 1);
            }}>+</button> : <div className='count'></div>}


        </div>
        <button className='reset-button' onClick={() => {
          setCounter(0)
        }} >Reset</button>
      </div>
      <footer>
        <p>Made with <span>React</span> at <a href='https://www.lereacteur.io/'>Le Reacteur</a> by <a href='https://github.com/andreamasselot'>Andréa</a></p>
      </footer>

    </div>
  );
}

export default App;
