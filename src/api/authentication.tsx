import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut, 
    sendPasswordResetEmail, 
    sendEmailVerification,
} from "firebase/auth"
import { auth } from "@/config/firebase-config"
import { getFirebasErrorMessage } from "@/utils/getFirebaseErrorMessage"
import { FirebaseError } from "firebase/app"


// Inscription d'un utilisateur
export const firebaseCreatUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return { data: userCredential.user}
    } catch(error) {

        const firebaseError = error as FirebaseError

        const errorMessage = getFirebasErrorMessage(
            "createUserWithEmailAndPassword", 
            firebaseError.code
        )

        return { error: {
            code: firebaseError.code,
            message: errorMessage,
        }, }
    }
}

// Connexion d'un utilisateur
export const firebaseSignInUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return { data: userCredential.user}
    } catch (error) {

        const firebaseError = error as FirebaseError

        const errorMessage = getFirebasErrorMessage(
            "signInWithEmailAndPassword", 
            firebaseError.code
        )
        return { 
            error: {
                code: firebaseError.code,
                message: errorMessage,
        }, 
    }
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

        const errorMessage = getFirebasErrorMessage(
            "signOut", 
            firebaseError.code
        )

        return { error: {
            code: firebaseError.code,
            message: errorMessage,
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

        const errorMessage = getFirebasErrorMessage(
            "sendPasswordResetEmail", 
            firebaseError.code
        )

        return { error: {
            code: firebaseError.code,
            message: errorMessage,
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

        const errorMessage = getFirebasErrorMessage(
            "sendEmailVerification", 
            firebaseError.code
        )

        return { error: {
            code: firebaseError.code,
            message: errorMessage,
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

        const errorMessage = getFirebasErrorMessage(
            "fetch", 
            firebaseError.code
        )

        return ({
            error: {
                code: firebaseError.code,
                message: errorMessage,
            }
        })
    }
    return {data: true}
}