import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";
import { auth, db } from './index.js';


//Define queries

//get a specific listing
export const getListingById = async (listing_id) => {
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

// Post a trade
export const postTrade = async (listing_id, receiver_id, expiration_date, start_date = new Date()) => {
  try {
    const listing = await getListingById(listing_id)
    if (!listing) {
      throw new Error('Could not find listing with id: ', listing_id)
    } else {
      const data = {
        listing_id,
        owner_id: listing.user_id,
        expiration_date,
        start_date,
        status: true
      }
      let docRef = await addDoc(collection(db, 'trades'), data)
      return docRef.id
    }

  } catch (err) {
    console.log('Error creating trade: ', err.code, err.message)
  }
}

//post a trade
const postTrade = async (listing_id, receiver_id, start_date, expiration_date) => {
  try {
    const listing = await getListingById(listing_id)
    console.log(listing)
    let docRef = await addDoc(collection(db, 'trades'), {
      listing_id,
      owner_id
    })
  } catch (err) {

  }
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



