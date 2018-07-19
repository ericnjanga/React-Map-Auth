import React, { Component } from 'react';
import Map from './components/Map.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const style = {
      panelLogin: {
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        zIndex: '11',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        button: {
          background: 'rgb(0, 156, 255)',
          color: '#fff',
          padding: '10px',
          fontSize: '1rem',
          display: 'inline-block',
          width: '200px',
        },
      },
      overlay: {
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        zIndex: '10',
      },
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div style={style.panelLogin}>
          <button style={style.panelLogin.button}>Login with Gmail</button>
        </div>

        <div style={style.overlay} />

        <Map />
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
