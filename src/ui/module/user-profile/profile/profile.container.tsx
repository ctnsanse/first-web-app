import { useAuth } from "@/context/AuthUserContext"
import { ProfileView } from "./profile.view"
import { useToggle } from "@/hooks/use-toggle"
import { SubmitHandler, useForm } from "react-hook-form"
import { UserProfileFormFieldsType } from "@/types/form"

export const ProfileContainer = () => {

    const {authUser} = useAuth()
    const {value: isLoading, setValue: setLoading} = useToggle()

    const {
        handleSubmit,
        control,
        formState: {errors},
        register,
        setValue,
        setError,
    } = useForm<UserProfileFormFieldsType>()

    const hendleUpadteUserDocument = async (formData: UserProfileFormFieldsType) => {
        setLoading(true)
        // console.log(formData)
        setLoading(false)
    }

    const onSubmit: SubmitHandler<UserProfileFormFieldsType> = async (formData) => {
        hendleUpadteUserDocument(formData)
        return;
    }

    return (
        <ProfileView 
            form={{
                errors,
                control,
                register,
                handleSubmit,
                onSubmit,
                isLoading
            }}
        />
    )
}