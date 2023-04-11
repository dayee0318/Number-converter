import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [fromOption, setFromOption] = useState('decimal');
  const [toOption, setToOption] = useState('binary');
  const [result, setResult] = useState('');

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleFromOptionChange = (e) => {
    setFromOption(e.target.value);
  };

  const handleToOptionChange = (e) => {
    setToOption(e.target.value);
  };

  const handleConvert = () => {
    if (!/^[0-9A-Fa-f]+$/.test(number)) {
      setResult('Not Valid Input!');
      return;
    }

    if (fromOption === 'decimal') {
      setResult(parseInt(number, 10).toString(getBase(toOption)));
    } else {
      setResult(parseInt(number, getBase(fromOption)).toString(getBase(toOption)));
    }
  };

  const getBase = (option) => {
    switch (option) {
      case 'binary':
        return 2;
      case 'hex':
        return 16;
      case 'octal':
        return 8;
      default:
        return 10;
    }
  };

  return (
    <div className="container">
      <h1 className="title">NUMBER CONVERTER</h1>
      <div className="input-container">
        <label className="input-label">Number:</label>
        <input className="input-box" type="text" value={number} onChange={handleNumberChange} />
        <div>
          <label className="input-label">is</label>
          <select className="option-box" value={fromOption} onChange={handleFromOptionChange}>
            <option value="decimal">Decimal</option>
            <option value="binary">Binary</option>
            <option value="hex">Hexadecimal</option>
            <option value="octal">Octal</option>
          </select>
        </div>
      </div>
      <div className="input-container">
        <label className="input-label">convert it into</label>
        <select className="option-box" value={toOption} onChange={handleToOptionChange}>
          <option value="decimal">Decimal</option>
          <option value="binary">Binary</option>
          <option value="hex">Hexadecimal</option>
          <option value="octal">Octal</option>
        </select>
        <button className="convert-button" onClick={handleConvert}>Convert!</button>
      </div>
      {result !== '' && (
        <div className="result-container">
          <label className="result-label">Result:</label>
          <span className="result-text">{result}</span>
        </div>
      )}
    </div>

  );
}

export default App;
