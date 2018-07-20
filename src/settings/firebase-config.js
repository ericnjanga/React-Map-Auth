/**
 * Firebase configuration
 */

import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyCP7AK-PFmsR9Teq69pXPnZfd8NC2g_mlI',
  authDomain: 'fanci-map.firebaseapp.com',
  databaseURL: 'https://fanci-map.firebaseio.com',
  projectId: 'fanci-map',
  storageBucket: 'fanci-map.appspot.com',
  messagingSenderId: '25676979886',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Get Firebase references
export const provider = new firebase.auth.GoogleAuthProvider(); // provider
export const auth = firebase.auth(); // auth

export default firebase;
