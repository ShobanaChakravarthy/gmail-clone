import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCTShV7qktLAd0LUDK7-2Q-31pBQrt-Q2Q",
    authDomain: "clone-34d04.firebaseapp.com",
    projectId: "clone-34d04",
    storageBucket: "clone-34d04.appspot.com",
    messagingSenderId: "1043172401096",
    appId: "1:1043172401096:web:ab64c579102db5ce18aafd",
    measurementId: "G-T29FZXXR93"
});
// the firebaseApp which we initialized above, using that we can use it get firestore which will have all the data
// we are storing it in a variable called db and we are exporting it

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {db,auth,provider};