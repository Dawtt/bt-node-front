import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA8CIhRA-7IvfnaEmtz76IfRY54lQMlPdk",
  authDomain: "basement-trolls.firebaseapp.com",
  databaseURL: "https://basement-trolls.firebaseio.com",
  projectId: "basement-trolls",
  storageBucket: "basement-trolls.appspot.com",
  messagingSenderId: "777769482771"
};
const fire = firebase.initializeApp(config);
export default fire;
