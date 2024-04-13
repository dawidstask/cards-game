import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// this setting values should go to .env file
export const firebaseApp = initializeApp({
	apiKey: "AIzaSyCHpulYdo8c_B3wypvGiFOB9j_4jxcl034",
	authDomain: "cards-60dcf.firebaseapp.com",
	projectId: "cards-60dcf",
	storageBucket: "cards-60dcf.appspot.com",
	messagingSenderId: "56110819157",
	appId: "1:56110819157:web:266a7b17e6b5373368f1dc"
})

export const db = getFirestore(firebaseApp)
