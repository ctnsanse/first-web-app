import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFielsType } from "@/types/form";
import { firebaseCreatUser, sendEmailVerificationProcedure } from "@/api/authentication";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";
import { Button } from "@/ui/design-system/button/button";
import { firestoreCreateDocument, firestoreUpdateDocument } from "@/api/firestore";

export const RegisterContainer = () => {

    const { value: isLoading, setValue: setIsLoading, toggle } = useToggle();
    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFielsType>();

    // Création du document d'un utilisateur
    const handleCreateUserDocument = async (collectionName: string, documentID: string, document: object) => {
        const {error} = await firestoreCreateDocument(
            collectionName,
            documentID,
            document
        )

    }

    // Inscription d'un utillisateur avec l'email, le password, et how_did_hear..
    const handleCreateUserAuthentication = async ({
        email,
        password,
        how_did_hear
    }: RegisterFormFielsType) => {

        // Attendre la création d'un utilisateur avec le password et l'email
        const { error, data } = await firebaseCreatUser(email, password)

        // Si une erreur est détéctée arrête le chargement et émettre un message d'erreur
        if (error) {
            setIsLoading(false)
            toast.error(error.message)
            return
        }

        // Ce que va contenir le document de l'utilisateur dans la db
        const userDocumentData = {
            email: email,
            how_did_hear: how_did_hear,
            uid: data.uid,
            creation_date: new Date(),
        }

        toast.success("Incription effectuée avec succes !")
        setIsLoading(false)
        reset()

        handleCreateUserDocument("users", data.uid, userDocumentData)

        // .. @todo send email confirmation procedure
        sendEmailVerificationProcedure()

    }

    const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
        setIsLoading(true)

        const { email, password } = formData;

        // Critère pour le passsword
        if (password.length <= 5) {
            setError("password", {
                type: "manual",
                message: "Ton message doit comporter au minimum 6 caractères",
            })
            return
        }

        handleCreateUserAuthentication(formData)
    }

    return (
            <RegisterView
                form={{
                    errors,
                    register,
                    handleSubmit,
                    onSubmit,
                    isLoading,
                }}
            />
    );
};