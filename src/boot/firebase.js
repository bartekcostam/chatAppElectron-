// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/database'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDnA0bX-lNwY039OUW27Cbkai0avDaqoMw',
  authDomain: 'chat-6b95f.firebaseapp.com',
  databaseURL: 'https://chat-6b95f.firebaseio.com',
  projectId: 'chat-6b95f',
  storageBucket: 'chat-6b95f.appspot.com',
  messagingSenderId: '252483459595',
  appId: '1:252483459595:web:511136ddbcf9f725e0850e',
  measurementId: 'G-Z1VVHP8JES',
}
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
