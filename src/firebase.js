import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail, 
    updateEmail, 
    updatePassword,
    updateProfile
} from 'firebase/auth';

const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
    // apiKey: "AIzaSyAhkXA0_f3FvfFHLXtyUYgLyfqysp3AIYk",
    // authDomain: "fox-auth-development-542e8.firebaseapp.com",
    // projectId: "fox-auth-development-542e8",
    // storageBucket: "fox-auth-development-542e8.appspot.com",
    // messagingSenderId: "1099349143531",
    // appId: "1:1099349143531:web:de6c24a8279ee49e5c33ae"
})

export const auth = getAuth();
export const createUser = createUserWithEmailAndPassword;
export const signInUser = signInWithEmailAndPassword;
export const resetPassword = sendPasswordResetEmail;
export const changeEmail = updateEmail;
export const changePassword = updatePassword;
export const changeProfile = updateProfile;
export default app