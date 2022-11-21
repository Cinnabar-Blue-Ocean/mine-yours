import { collection, addDoc, setDoc, doc,updateDoc } from "firebase/firestore";
import { auth, db } from './index.js';


//Define queries

//get a specific listing

//get a specific user

//get messages from user

//get reviews for a user

//get a trade

//post a review

//post a trade

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

//update a review

//update a listing
export const updateListing = async (listing_id, data) => {
  const docRef = await doc(db, 'listings', listing_id)

  return await updateDoc(docRef, data)
}

//delete a listing

//delete a message

//delete a review



