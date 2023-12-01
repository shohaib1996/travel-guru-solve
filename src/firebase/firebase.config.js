
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAjvllYdqm1ikDIdryo40szOPnoxnJfWB0",
  authDomain: "user-signup-signin-auth.firebaseapp.com",
  projectId: "user-signup-signin-auth",
  storageBucket: "user-signup-signin-auth.appspot.com",
  messagingSenderId: "411075034647",
  appId: "1:411075034647:web:4b59f113e6be138e67e652"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth