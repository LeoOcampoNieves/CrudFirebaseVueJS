import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrxGPFkoAxsVywar2Xt4UIsf5dX0vIgto",
    authDomain: "crudfirebasevuejs.firebaseapp.com",
    databaseURL: "https://crudfirebasevuejs.firebaseio.com",
    projectId: "crudfirebasevuejs",
    storageBucket: "crudfirebasevuejs.appspot.com",
    messagingSenderId: "558578021476",
    appId: "1:558578021476:web:7789913ed8da33150e1b71"
};

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore().settings({
	timestampsInSnapshots: true
})

export default firebaseApp.firestore()