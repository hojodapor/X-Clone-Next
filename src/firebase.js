// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: "x-next-427109.firebaseapp.com",
//   projectId: "x-next-427109",
//   storageBucket: "x-next-427109.appspot.com",
//   messagingSenderId: "941208294326",
//   appId: "1:941208294326:web:6cc2a7c966e3ca0e936717",
//   measurementId: "G-1GCYR9CW1P",
// };

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-427109.firebaseapp.com",
  projectId: "x-next-427109",
  storageBucket: "x-next-427109.appspot.com",
  messagingSenderId: "941208294326",
  appId: "1:941208294326:web:6cc2a7c966e3ca0e936717",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
