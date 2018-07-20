import React from 'react';
import { auth, provider } from './../settings/firebase-config.js';


class PanelLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {







    /**
     * SIGNS USERS BACK-IN
     * -------------------
     * (FirebaseAuth service remembers their credentials)
     */

    auth.onAuthStateChanged((user) => {

      // Save user record in the database before attempting to retrieve the
      // geolocation coordinates (it's not guaranteed that's why we save user info first) 
      if (user) { 

        this.setState({ user });
        console.log('>>>>user=', user);

      } /* else {

        this.setState({ user: null });

      }*/
    }, (error) => {

      error.log('>>>error=', error);

    }); // [end] user sign-in + save
  }


  // Shell login method
  handleLogin() {

    auth.signInWithRedirect(provider);
    auth.getRedirectResult()
    .then((userAuthObject) => {
      console.log('...userAuthObject=', userAuthObject);
    }).catch(function(error) {// [end] user successful login 
      var errorCode = error.code;
      error.log('>>>errorCode=', errorCode);
    });

  }

  render() {

    const style = {
      container: {
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        zIndex: '3',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '100px',
      },
      h1: {
        color: '#fff',
        fontSize: '3rem',
        zIndex: '4',
      },
      button: {
        background: 'rgb(0, 156, 255)',
        color: '#fff',
        padding: '10px',
        fontSize: '1rem',
        display: 'inline-block',
        width: '200px',
        borderRadius: '4px',
        zIndex: '3',
      },
      overlay: {
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        zIndex: '2',
      },
    };

    if(this.state.user) {

      return false;

    }
  
    return (
      <div style={style.container}>
        <h1 style={style.h1}>fanci</h1>
        <button style={style.button} onClick={this.handleLogin}>Login with Gmail</button>
        <div style={style.overlay} />
      </div>
    );

  }

};

export default PanelLogin;
