import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

import { listenFireStore } from "../firebase/listeners";

const useFireStore = (collectionName) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    let sub = "";
    if (auth) {
      sub = listenFireStore(
        collectionName,
        auth?.currentUser?.uid,
        (fetchedData) => {
          if (fetchedData) {
            setData(fetchedData);
            setIsLoading(false);
          } else {
            setData(null);
            setIsLoading(false);
          }
        }
      );
    }
    return sub && sub;
  }, [collectionName]);

  return { data, isLoading };
};

export default useFireStore;
