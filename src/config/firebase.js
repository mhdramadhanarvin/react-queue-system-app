// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, onValue } from "firebase/database";

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBjguO9RRY2tRj2X7TBMnDgS88JFlBitq8",
//   authDomain: "queue-system-14052.firebaseapp.com",
//   databaseURL: "https://queue-system-14052-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "queue-system-14052",
//   storageBucket: "queue-system-14052.appspot.com",
//   messagingSenderId: "926708631666",
//   appId: "1:926708631666:web:40aae05c92fbdce15d1aeb",
//   measurementId: "G-82QHR30YHM"
// };

// const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);
// const posts = ref(database, 'posts');
// onValue(posts, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data)
// });

import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

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
export const database = getDatabase()
