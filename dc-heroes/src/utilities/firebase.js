import firebase from 'firebase/app';
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgu9tCmqpk1HE0xF1VK_OUBCsvan3k9fg",
    authDomain: "vue-full-course-5a5df.firebaseapp.com",
    projectId: "vue-full-course-5a5df",
    storageBucket: "vue-full-course-5a5df.appspot.com",
    messagingSenderId: "1044379894908",
    appId: "1:1044379894908:web:f70e7e59ffc7aea43a35f9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;