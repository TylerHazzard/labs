import { initializeApp } from "firebase/app"
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider
} from "firebase/auth"
const firebaseConfig = {
	apiKey: "AIzaSyB433UboufJRinoLr-qZereudV_6HIIDMs",
	authDomain: "shoutouts-10287.firebaseapp.com",
	projectId: "shoutouts-10287",
	storageBucket: "shoutouts-10287.appspot.com",
	messagingSenderId: "352730667840",
	appId: "1:352730667840:web:e001709050fbf08d1738a5"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
const authProvider = new GoogleAuthProvider()
export function signInWithGoogle(): void {
	signInWithPopup(auth, authProvider)
}
export function signOut(): void {
	auth.signOut()
}