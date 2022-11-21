import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from './index'


export const getListings = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "listing"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  } catch(err) {
    console.log(err)
  }
}

export const ratingListings = async (rating) => {
  try {
    const q = query(collection(db, "listing"), where("review", ">=", rating));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  } catch(err) {
    console.log(err)
  }
}

export const typeListings = async (type) => {
  try {
    const q = query(collection(db, "listing"), where("type", "==", type));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  } catch(err) {
    console.log(err)
  }
}

export const distanceListings = async (location) => {
  try {
    const q = query(collection(db, "listing"), where("distance", "<=", location));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  } catch(err) {
    console.log(err)
  }
}
