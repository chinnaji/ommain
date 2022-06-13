import { db } from "./firebase";
import {
  collection,
  updateDoc,
  getDoc,
  doc,
  getDocs,
} from "firebase/firestore";

// database reference
const dbRef = collection(db, "speakers");

export const getspeakers = async () => {
  try {
    const res = await getDocs(dbRef).then((data) =>
      data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      })
    );
    // return products
    return res;
  } catch (err) {
    return err;
  }
};

export const updateSpeakers = async (new_value) => {
  try {
    const [{ balance }] = await getspeakers();
    console.log("a");

    let fieldToEdit = doc(db, "speakers", "ZPM2tJO27hWcjtvue6B0");
    const a = await updateDoc(fieldToEdit, {
      balance: Number(new_value) + Number(balance),
      name: "simon sinek",
    });
    console.log(a);

    // return products
    return fieldToEdit;
  } catch (err) {
    return err;
  }
};
