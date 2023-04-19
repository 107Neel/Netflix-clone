import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAeU91MXM_B7Zs1CZpCnRYmBy0WKcI-zTQ",
    authDomain: "netflix-clone-37765.firebaseapp.com",
    projectId: "netflix-clone-37765",
    storageBucket: "netflix-clone-37765.appspot.com",
    messagingSenderId: "708052548673",
    appId: "1:708052548673:web:7eaebaeb06b7ea9702dac0"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;
