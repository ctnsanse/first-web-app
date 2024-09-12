import { doc, updateDoc, setDoc } from "firebase/firestore"
import { db } from "@/config/firebase-config"
import { FirebaseError } from "firebase/app"



// Création d'un du=ocument d'utilisateur dans la db
export const firestoreCreateDocument = async (collectionName: string, documentID: string, data: object) => {
    try {

        const documentRef = doc(db, collectionName, documentID)

        await setDoc(
            documentRef,
            {data}
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

// Modification/MAJ d'un utilisateur dans la db
export const firestoreUpdateDocument = async (
    collectionName: string, 
    documentID: string, 
    data: object
) => {
    try {

        const documentRef = doc(db, collectionName, documentID)
        
        await updateDoc(documentRef, data)
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