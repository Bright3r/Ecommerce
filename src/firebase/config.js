import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCeVkfE4DDpEen0pS3mElVn0EV35Vql7-I",
    authDomain: "ecommerce-site-5e7e2.firebaseapp.com",
    projectId: "ecommerce-site-5e7e2",
    storageBucket: "ecommerce-site-5e7e2.appspot.com",
    messagingSenderId: "566947942681",
    appId: "1:566947942681:web:d61b55b95e0461cc017588",
    measurementId: "G-NFWERPZ2PM"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)