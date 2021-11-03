import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO12GF26v4CFNakEj_MkrDi6PuRBqcJyg",

  authDomain: "ecommerce-42976.firebaseapp.com",

  projectId: "ecommerce-42976",

  storageBucket: "ecommerce-42976.appspot.com",

  messagingSenderId: "293479358607",

  appId: "1:293479358607:web:bf18a676973f65d40e90fa",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
