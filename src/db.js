const config = {
    apiKey: "AIzaSyDTrcbYabLQ0cradfI8MlMXcmUdTUkVftw",
    authDomain: "typescript-platzi-92798.firebaseapp.com",
    databaseURL: "https://typescript-platzi-92798.firebaseio.com",
    projectId: "typescript-platzi-92798",
    storageBucket: "typescript-platzi-92798.appspot.com",
    messagingSenderId: "741221664395",
    appId: "1:741221664395:web:da0f388ff7c34816"
};

export const db = firebase.initializeApp(config).firestore();