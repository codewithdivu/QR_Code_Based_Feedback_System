import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { collections } from "./collections";
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

// export const getNumberData = async (phoneNumber) =>
//   new Promise((resolve) => {
//     const getNumberQuery = query(
//       collection(db, "user"),
//       where("phoneNumber", "==", phoneNumber)
//     );
//     getDocs(getNumberQuery)
//       .then((response) => {
//         const arr = [];
//         response.docs.forEach((doc) => {
//           arr.push({
//             ...doc.data(),
//             id: doc.id,
//           });
//         });
//         if (arr.length > 0) resolve(arr[0]);
//         else resolve(null);
//       })
//       .catch(() => {
//         resolve(null);
//       });
//   });

export const addQrCode = async (payLoad) =>
  new Promise((resolve) => {
    // console.log("userData", userData);
    const documentReference = doc(collection(db, collections.QR_CODES));
    setDoc(documentReference, {
      ...payLoad,
      createdBy: auth?.currentUser?.uid,
      createdAt: new Date(),
      id: documentReference.id,
    })
      .then(() => resolve(true))
      .catch(() => {
        resolve(false);
      });
  });

// request

export const addRequest = async (payLoad) =>
  new Promise((resolve) => {
    // console.log("userData", userData);
    const documentReference = doc(collection(db, "request"));
    setDoc(documentReference, {
      ...payLoad,
      createdBy: auth?.currentUser?.uid,
      createdAt: new Date(),
      id: documentReference.id,
    })
      .then(() => resolve(true))
      .catch(() => {
        resolve(false);
      });
  });
