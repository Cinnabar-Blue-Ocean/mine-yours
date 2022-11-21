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
export const signUp = async (email, password, firstName, lastName, zipCode) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
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
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    return user;
  } catch (err) {
    console.log('Could not sign in: ', err.message);
  }
}

// calling signout will logout user and set user object to null
export const signOut = async () => {
  try {
    await signOut(auth);
  } catch(err) {
    console.log('Error in authMethods.js signOut', err.code, err.message);
  }
}

signUp('test1234@gmail.com', 'password123', 'Bobby', 'Joe', 80015)
//