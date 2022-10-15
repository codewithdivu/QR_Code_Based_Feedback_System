import { getDocs } from "firebase/firestore";

const getPost = async () => {
  const data = await getDocs("user");
  const docs = data?.docs;
  const sortedData = docs?.sort((a, b) => a.date - b.date);
  const newData = sortedData.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  setPostList(newData);
};
