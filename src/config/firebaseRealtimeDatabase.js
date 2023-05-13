// import { database } from "./firebase"
import { getDatabase, set, ref, onValue } from "firebase/database"

import { initializeApp } from "firebase/app" 

const firebaseConfig = {
  apiKey: "AIzaSyBjguO9RRY2tRj2X7TBMnDgS88JFlBitq8",
  authDomain: "queue-system-14052.firebaseapp.com",
  databaseURL: "https://queue-system-14052-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "queue-system-14052",
  storageBucket: "queue-system-14052.appspot.com",
  messagingSenderId: "926708631666",
  appId: "1:926708631666:web:40aae05c92fbdce15d1aeb",
  measurementId: "G-82QHR30YHM"
}

// export default firebase; 
initializeApp(firebaseConfig)
const database = getDatabase()

export const getData = async () => {
  let rows
  const data = await ref(database, "counter")

  onValue(data, (snapshot) => (rows = snapshot.val() ?? [] ))
  
  return rows
}

export const updateData = async (data) => {
  await set(ref(database, "counter"), data) 
}
