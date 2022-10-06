import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "./config";

// ADDING DATA of FEEDBACKS IN FIREBASE

export const addData = async (userData) =>
  new Promise((resolve) => {
    // console.log("userData", userData);
    const documentReference = doc(collection(db, "user"));
    setDoc(documentReference, {
      ...userData,
      createdBy: auth?.currentUser?.uid,
      createdAt: new Date(),
      id: documentReference.id,
    })
      .then(() => resolve(true))
      .catch(() => {
        resolve(false);
        // console.log('error', error);
      });
  });

// GETTING ALL THE DATA OF FEEDBACKS

export const getAllUsers = async () =>
  new Promise((resolve) => {
    getDocs(collection(db, "user"))
      .then((response) => {
        const arr = [];
        console.log("hello");
        response.docs.forEach((doc) => {
          arr.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        if (arr.length > 0) resolve(arr[0]);
        else resolve(null);
      })
      .catch(() => {
        resolve(null);
      });
  });

// const querySnapshot = await getDocs(collection(db, "cities"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
export const getUsers = async () => {
  try {
    const docsSnap = await getDocs(collection(db, "user"));
    if (docsSnap.docs.length > 0) {
      const arr = [];
      docsSnap.forEach((doc) => {
        arr.push({
          ...doc.data(),
          id: doc.id,
        });
        // console.log(doc.data());
        // console.log(doc.id);
      });
      return arr;
    }
  } catch (error) {
    console.log(error);
  }
};
