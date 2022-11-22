import { collection, addDoc, setDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from './index.js';


//Define queries

//get a specific listing
const getListingById = async (listing_id) => {
  let docSnap = await getDoc(doc(db, 'listings', listing_id))
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.log('Could not find listing with id: ', listing_id)
    return null;
  }
}
//get a specific user

//get messages from user

//get reviews for a user

//get a trade
const getTradeById = (trade_id) => {

}

//post a review

//post a trade
const postTrade = (listing_id, ) => {

}

//post a listing
export const postListing = async (name, description, photos = [], type, zip_code) => {
  return await addDoc(collection(db, 'listings'), {
    name,
    description,
    photos,
    status: true,
    type,
    user_id: auth.currentUser.uid,
    zip_code
  })
}

//update user info
export const updateUser = async (user_id, data) => {
  const docRef = await doc(db, 'users', user_id)
  return await updateDoc(docRef, data)
}
//update a review

//update a listing
export const updateListing = async (listing_id, data) => {
  const docRef = await doc(db, 'listings', listing_id)
  return await updateDoc(docRef, data)
}

//delete a listing
export const deleteListing = async (listing_id) => {
  return await deleteDoc(doc(db, 'listings', listing_id))
}

//delete a review



