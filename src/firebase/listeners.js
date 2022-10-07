import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "./config";

export const listenFireStore = (collectionName, uid, callback) => {
  const listenCollectionQuery = query(collection(db, collectionName));
  return onSnapshot(listenCollectionQuery, (querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => data.push({ ...doc.data() }));
    callback(data);
  });
};
