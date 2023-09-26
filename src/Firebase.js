import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyCnuDjVHopCnjCg5USN6zjqU2QHciZzx9g",
	authDomain: "authtest-da9df.firebaseapp.com",
	projectId: "authtest-da9df",
	storageBucket: "authtest-da9df.appspot.com",
	messagingSenderId: "206017484468",
	appId: "1:206017484468:web:98b438f0a7b7e6cf8ee9e1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			console.log(result.user.displayName);
			console.log(result.user.email);
            localStorage.setItem("Email", result.user.email);
		})
		.catch((error) => {
			console.log(error);
		});
};
