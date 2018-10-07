import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCqMWJTiCtiTEKLrQdpDXM9eOCgYsZdVBs",
    authDomain: "solid-696bd.firebaseapp.com",
    databaseURL: "https://solid-696bd.firebaseio.com",
    projectId: "solid-696bd",
    storageBucket: "solid-696bd.appspot.com",
    messagingSenderId: "44187510510"
};

const fire = firebase.initializeApp(config);

export const auth = fire.auth();
export const storage = fire.storage();
export const database = fire.database();
