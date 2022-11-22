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
    return allUsers;
  } catch(err) {
    console.error(err.stack);
  }
};

//get a specific listing
export const getListing = async (queryObject) => {
  let name = queryObject.name;
  let type = queryObject.type;
  let zip_code = queryObject.zip_code;

  try {
    let listings = [];
    const listingsCollection = collection(db, 'listings');
    const data = query(listingsCollection, where("name", "==", `${name}`));
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach(doc => {
      listings.push(doc.data());
    })
    return listings;
  } catch(err) {
    console.error(err.stack);
  }
};

//get a specific user
export const getUser = async (name) => {
  try {
    let user = [];
    const usersCollection = collection(db, 'users');
    const data = query(usersCollection, where("username", "==", `${name}`));
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach(doc => {
      user.push(doc.data());
    })
    return user;
  } catch(err) {
    console.error(err.stack);
  }
};

//get messages from user

//get reviews for a user

//get a trade