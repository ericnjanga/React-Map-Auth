import React, { Component } from 'react';
import PanelLogin from './panels/PanelLogin.js';
import Map from './components/Map.js';
import { options } from './settings/geolocation.js';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      geolocMsg: 'Loading Map',
    };
  }


  
  componentDidMount() {

    // Saving current geolocation position in the state
    const success = (pos) => {
    
      this.setState({
        center: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
      });

    };
    

    // Saving current geolocation error message in the state
    const failure = (err) => {

      this.setState({
        geolocMsg: `ERROR(${err.code}): ${err.message}`
      });

    };


    navigator.geolocation.getCurrentPosition(success, failure, options);

  }


  render() {

    return (
      <div className="App">
        <PanelLogin />

        {
          !this.state.center ?
          <div style={{ padding: '100px 30px' }}>{ this.state.geolocMsg }</div> :
          <Map {...this.state} />
        }
      </div>
    );
  }
}

export default App;
