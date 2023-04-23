import logo from './logo.svg';
import './App.css';
import Keypad from './Keypad';
import { useState } from 'react';

// state full component
function App() {
  const displayInputFlag = true;
  const [displayTxt, setDisplayTxt] = useState('');

  const [open, setOpen] = useState(false);

  const [count, setCount] = useState(0);

  // let count = 0;

  // callback to get the data from child/ also dynamic data from child
  const handleTxt = (character) => {
    setDisplayTxt(displayTxt + character);
  }

  return (
    <>
      <div className="App">
        {console.log('Rendering', count)}
        {/* {displayInputFlag && <input />} */}
        {displayInputFlag ? <input value={displayTxt} readOnly /> : (<h3>No Display</h3>)}
        <Keypad handleTxt={handleTxt} />
        <h2>{count}</h2>
        <button
          onClick={() => {
            if (count < 10) {
              setCount(count + 1)
            }
          }}
        // onClick={() => {
        //   count++;
        // }}
        >+</button>
        <button
          onClick={() => setCount(count - 1)}
        // onClick={() => {
        //   count--;
        // }}
        >-</button>

      </div>
      <div>
        <button
          style={{
            border: 'none',
            background: 'none',
            display: 'flex',
            minWidth: '300px',
            padding: '4px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <h6
          >Open Details</h6>
          <div>
            V
          </div>
        </button>
        {open && <div class={'class-open class-close'} >
          <h1>Details</h1>
        </div>}
        <br />
        <div class={'class-one class-two class-three'} >
          <h1>Details 2</h1>
        </div>
      </div>
    </>
  );
}

export default App;
