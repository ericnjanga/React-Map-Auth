import React from 'react';


const PanelLogin = () => {

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

  return (
    <div style={style.container}>
      <h1 style={style.h1}>fanci</h1>
      <button style={style.button}>Login with Gmail</button>
      <div style={style.overlay} />
    </div>
  );

};

export default PanelLogin;
