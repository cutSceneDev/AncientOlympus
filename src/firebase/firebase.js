import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBacIYFv7vm5rcTEYaOPGfNFJxAsnqof9Y",
  authDomain: "ancient-olympus.firebaseapp.com",
  databaseURL: "https://ancient-olympus.firebaseio.com",
  projectId: "ancient-olympus",
  storageBucket: "ancient-olympus.appspot.com",
  messagingSenderId: "32348814396"
}

firebase.initializeApp(config)

export const database = firebase.database()

export const auth = firebase.auth()