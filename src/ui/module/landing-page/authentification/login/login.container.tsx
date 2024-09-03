import { LoginView } from "./login.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFielsType } from "@/types/form";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { useToggle } from "@/hooks/use-toggle";
import { firebaseSignInUser } from "@/api/authentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {

    const router= useRouter()
    const { value: isLoading, setValue: setIsLoading, toggle } = useToggle();
    console.log(router)

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<LoginFormFielsType>();

    const handleSignInUser = async ({
        email, 
        password,
    }: LoginFormFielsType) => {
        const {error} = await firebaseSignInUser(email, password)
        if (error) {
            setIsLoading(false)
            toast.error(error.message)
            return
        }
        toast.success("Bienvenue sur FaFoFri")
        setIsLoading(false)
        reset()
        router.push("/mon-espace")
    };

    const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
        setIsLoading(true)
        const {password} = formData
        if (password.length <= 5) {
            setError("password", {
                type: "manuel",
                message: "Ton mot de passe doit comporter au minimum 6 caractères",
            })
            setIsLoading(false)
            return;
        }
        handleSignInUser(formData)
    }

    return (
        <LoginView
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