import React, { Component } from 'react';
import PanelLogin from './panels/PanelLogin.js';
import { options } from './settings/geolocation.js';
import Map from './components/Map.js';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      geolocMsg: 'Loading Map',
    };
  }


  
  componentDidMount() {

    /**
     * Saving current geolocation position in the state
     * @param {*} pos 
     */
    const success = (pos) => {
    
      let center = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };

      localStorage.setItem('fanci-lat', center.lat );
      localStorage.setItem('fanci-lng', center.lng );
      this.setState({ center });

    };
    

    /**
     * Saving current geolocation error message in the state
     * @param {*} err 
     */
    const failure = (err) => {

      this.setState({
        geolocMsg: `ERROR(${err.code}): ${err.message}`
      });

    };

    // Get current location
    // (success method will save position locally to load map faster the next time)
    navigator.geolocation.getCurrentPosition(success, failure, options);

    // Try to get position from local storage 
    // (this will help load map faster)
    let center = {
      lat: parseFloat(localStorage.getItem('fanci-lat') ),
      lng: parseFloat(localStorage.getItem('fanci-lng') ),
    };

    // Update current location
    if(center.lat && center.lng) {
      this.setState({ center });
    }

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
