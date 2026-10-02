// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyADBnHGXFmB6Wyp1omcvIdBb_NlI22Uj3s",
  authDomain: "intelligent-classroom-energy.firebaseapp.com",
  databaseURL: "https://intelligent-classroom-energy-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "intelligent-classroom-energy",
  storageBucket: "intelligent-classroom-energy.firebasestorage.app",
  messagingSenderId: "848412547561",
  appId: "1:848412547561:web:0cba6952bf0c842d251378",
  measurementId: "G-J9R86V7T7P"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export default app;
// // Firebase configuration
// // Replace every placeholder below with the values from:
// // Firebase Console -> Project settings -> Your apps -> Web app

// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyADBnHGXFmB6Wyp1omcvIdBb_NlI22Uj3s",
//   authDomain: "intelligent-classroom-energy.firebaseapp.com",
//   databaseURL: "https://intelligent-classroom-energy-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "intelligent-classroom-energy",
//   storageBucket: "intelligent-classroom-energy.firebasestorage.app",
//   messagingSenderId: "848412547561",
//   appId: "1:848412547561:web:0cba6952bf0c842d251378",
//   measurementId: "G-J9R86V7T7P"
// };

// const app = initializeApp(firebaseConfig);
// export const database = getDatabase(app);
// export default app;
// // export const firebaseConfig = {
// //   apiKey: "YOUR_API_KEY",
// //   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
// //   databaseURL: "https://YOUR_DATABASE_URL",
// //   projectId: "YOUR_PROJECT_ID",
// //   storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
// //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
// //   appId: "YOUR_APP_ID"
// // };
// // const firebaseConfig = {
// //   apiKey: "AIzaSyADBnHGXFmB6Wyp1omcvIdBb_NlI22Uj3s",
// //   authDomain: "intelligent-classroom-energy.firebaseapp.com",
// //   databaseURL: "https://intelligent-classroom-energy-default-rtdb.europe-west1.firebasedatabase.app",
// //   projectId: "intelligent-classroom-energy",
// //   storageBucket: "intelligent-classroom-energy.firebasestorage.app",
// //   messagingSenderId: "848412547561",
// //   appId: "1:848412547561:web:0cba6952bf0c842d251378",
// //   measurementId: "G-J9R86V7T7P"
// // };