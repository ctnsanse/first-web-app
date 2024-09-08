import { auth } from "@/config/firebase-config"
import { error } from "console"
import { FirebaseError } from "firebase/app"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification } from "firebase/auth"
import { signOut } from "firebase/auth"


// Inscription d'un utilisateur
export const firebaseCreatUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return { data: userCredential.user}
    } catch(error) {

        const firebaseError = error as FirebaseError

        // ... @todo format error
        return { error: {
            code: firebaseError.code,
            message: firebaseError.message,
        }, }
    }
}

// Connexion d'un utilisateur
export const firebaseSignInUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return { data: userCredential.user}
    } catch(error) {

        const firebaseError = error as FirebaseError

        // ... @todo format error
        return { error: {
            code: firebaseError.code,
            message: firebaseError.message,
        }, }
    }
}

// Déconnexion d'un utilisateur
export const firebaseLogOutUser = async () => {
    try {
        await signOut(
            auth
        )
        return { data: true}
    } catch(error) {

        const firebaseError = error as FirebaseError

        // ... @todo format error
        return { error: {
            code: firebaseError.code,
            message: firebaseError.message,
        }, }
    }
}

// Création d'un email de récuperation de password
export const sendEmailToResetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(
            auth,
            email
        )
        return {data: true}

    // En cas d'erreur
    } catch(error) {

        const firebaseError = error as FirebaseError

        // ... @todo format error
        return { error: {
            code: firebaseError.code,
            message: firebaseError.message,
        }, }
    }
}

// Création d'un email de vérification
export const sendEmailVerificationProcedure = async () => {
    if (auth.currentUser) {
        
    try {
        await sendEmailVerification(
            auth.currentUser
        )
        return { data: true}
    } catch(error) {

        const firebaseError = error as FirebaseError

        // ... @todo format error
        return { error: {
            code: firebaseError.code,
            message: firebaseError.message,
        }, }

        }   
    } else {
        return {
            error: {
                code: "unknow",
                message: "une erreur est survenue",
            }
        }
    }
}

export const updateUserIdentificationData = async (uid: string, data: any) => {
    const result = await fetch('https://us-central1-fafofri-44e0c.cloudfunctions.net/updateUser', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            uid: uid,
            data: data,
        })
    })

    if (!result.ok) {
        const errorResponse = await result.json()
        const firebaseError = errorResponse as FirebaseError
        // ... @todo format error
        return ({
            error: {
                code: firebaseError.code,
                message: firebaseError.message,
            }
        })
    }
    return {data: true}
}