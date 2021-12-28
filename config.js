import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAYI5jHpdrPweFf5cB_N_PWmNBCCo7_fAA",
  authDomain: "complain-938bd.firebaseapp.com",
  projectId: "complain-938bd",
  storageBucket: "complain-938bd.appspot.com",
  messagingSenderId: "517015801044",
  appId: "1:517015801044:web:a248b26a206efd7e5bff41"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

