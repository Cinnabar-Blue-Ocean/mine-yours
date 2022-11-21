import { collection, addDoc, setDoc } from "firebase/firestore";
import { auth, db } from './index.js';


//Define queries

//get a specific listing

//get a specific user

//get messages from user

//get reviews for a user

//get a trade

//post a review

//post a trade

//post a message

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

//delete a listing

//delete a message

//delete a review



