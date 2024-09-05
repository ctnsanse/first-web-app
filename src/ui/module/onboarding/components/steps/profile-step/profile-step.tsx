import { BaseComponentProps } from "@/types/onboarding-step-list"
import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Container } from "@/ui/components/container/container"
import { OnboardingTabs } from "../../tabs/onboarding-tabs"
import { Typography } from "@/ui/design-system/typography/typography"
import { ProfileStepForm } from "./profile-step-form"
import { SubmitHandler, useForm } from "react-hook-form"
import { OnboardingProfileFormFieldsType } from "@/types/form"
import { useToggle } from "@/hooks/use-toggle"

export const ProfileStep = ({
    prev,
    next,
    isFirstStep,
    isFinalStep,
    stepsList,
    getCurrentStep,
}: BaseComponentProps) => {

    const { value: isLoading, setValue: setLoading } = useToggle()

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        reset,
        setValue,
    } = useForm<OnboardingProfileFormFieldsType>()

    const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (formData) => {
        setLoading(true)

        // ..
        next()
    }

    return (
       <div className="relative h-screen pb-[91px]">
                <div className="h-full overflow-auto">
            <Container className="grid h-full grid-cols-12">
                <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                    <div className="w-full space-y-5 pb-4.5">
                        <OnboardingTabs
                            tabs={stepsList}
                            getCurrentStep={getCurrentStep}
                        />
                        <Typography variant="h1" component="h1">
                            Présente toi !
                        </Typography>
                        <Typography variant="body-base" component="p" theme="gray">
                            Remplissez ce formulaire de présentation pour qu'on puisse mieux vous connaître.
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center h-full col-span-6 px-36">
                    <div className="flex justify-end w-full">
                        <ProfileStepForm 
                               form = {{
                                errors,
                                control,
                                register,
                                handleSubmit,
                                onSubmit,
                                isLoading,
                            }}
                        />
                    </div>
                </div>
            </Container>
        </div>
        <OnboardingFooter 
            prev={prev}
            next={next}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
        />
    </div>
    )
}