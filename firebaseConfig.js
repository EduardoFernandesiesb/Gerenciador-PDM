import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 


// cole abaixo a configuração do Firebase



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };