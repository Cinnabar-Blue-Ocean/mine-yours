import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { collection, addDoc, setDoc } from "firebase/firestore";
import { auth, db } from './index.js';

// Import authMethods.js accessing needed auth function

// Takes in new user details and return ref to the user in firestore
export const signUpWithEmail = async (email, password, firstName, lastName, zipCode) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    const uid = user.uid;
    const userRef = await setDoc(doc(db, 'users', uid), {
      email,
      first_name: firstName,
      last_name: lastName,
      zip_code: zipCode
    })
    return userRef;
  } catch (err) {
    console.log('Error in authMethods.js signup', err.code, err.message);
  }
}

// Will sign in and return user
export const signInWithEmail = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    console.log('Could not sign in: ', err.message);
  }
}

// calling signOut will logout user and set user object to null
export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch(err) {
    console.log('Error in authMethods.js signOut', err.code, err.message);
  }
}

