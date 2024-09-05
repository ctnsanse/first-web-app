import { FormsType } from "@/types/form"

interface Props {
    form: FormsType;
}

export const ProfileStepForm = ({form}: Props) => {
    const { register, errors, isLoading } = form;
    
    return (
    <form className="w-full max-w-md space-y-4">
        My Form
    </form>
    )
}