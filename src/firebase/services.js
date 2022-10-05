import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "./config";

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
