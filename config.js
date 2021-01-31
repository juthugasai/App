import firebase from "firebase";
require('@firebase/firestore')


const firebaseConfig = {
  apiKey: "AIzaSyBJmfuSgxWTZ9bk63R7SFctYF0UaxEwp3o",
  authDomain: "cyber-chat-89114.firebaseapp.com",
  projectId: "cyber-chat-89114",
  storageBucket: "cyber-chat-89114.appspot.com",
  messagingSenderId: "1039091815147",
  appId: "1:1039091815147:web:3b23ab9df0e670eb0ae4ae"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebase.firestore()