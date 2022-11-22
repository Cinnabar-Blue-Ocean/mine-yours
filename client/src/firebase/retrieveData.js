import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { auth, db } from './index.js';


//Define queries

export const getUsers = async () => {
  try {
    let allUsers = [];
    const usersCollection = collection(db, 'users');
    const data = await getDocs(usersCollection);
    data.forEach(doc => {
      allUsers.push(doc.data());
    })
    console.log(allUsers);
    return allUsers;
  } catch(err) {
    console.error(err.stack);
  }
};

//get a specific listing
export const getListingByName = async () => {
  try {
    let listings = [];
    const listingsCollection = collection(db, 'listings');
    const data = query(listingsCollection, where("name", "==", "Lawn Mower"));
    const querySnapshot = await getDocs(data);
    // querySnapshot.forEach(doc => {
    //   listings.push(doc.data);
    // })
    console.log(querySnapshot);
    return listings;
  } catch(err) {
    console.error(err.stack);
  }
};


//get a specific user

//get messages from user

//get reviews for a user

//get a trade