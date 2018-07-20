
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { googleMapAPIkey } from './../settings/geolocation.js';
import PropTypes from 'prop-types';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapAPIkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }),
  zoom: PropTypes.number,
};

Map.defaultProps = {
  zoom: 11,
};

export default Map;
