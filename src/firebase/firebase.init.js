// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD7cSbtwt6JWqKL1J9NaKRvMYiKQM_4rJg',
  authDomain: 'coffee-store-3b7ce.firebaseapp.com',
  projectId: 'coffee-store-3b7ce',
  storageBucket: 'coffee-store-3b7ce.firebasestorage.app',
  messagingSenderId: '648524870533',
  appId: '1:648524870533:web:4285c3c763b6d47d988aec',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)