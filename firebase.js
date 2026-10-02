import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  update
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const classroomRef = ref(db, "classroom");

export function listenToClassroom(callback) {
  return onValue(classroomRef, (snapshot) => {
    callback(snapshot.val() || {});
  }, (error) => {
    console.error("Firebase read error:", error);
    callback({ firebaseError: error.message });
  });
}

export async function setAppliance(name, value) {
  const updates = {};
  updates[`appliances/${name}`] = value;
  await update(classroomRef, updates);
}

export { db };
