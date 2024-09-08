import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-step-list"
import { Container } from "@/ui/components/container/container";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { Typography } from "@/ui/design-system/typography/typography";
import { ProfileStepForm } from "../profile-step/profile-step-form";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar";

export const AvatarStep = ({
    prev,
    next,
    isFinalStep,
    stepsList,
    getCurrentStep,
}: BaseComponentProps) => {

    const { authUser } = useAuth();

    const { value: isLoading, setValue: setLoading } = useToggle()

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
                                    Dernière étape !
                                </Typography>
                                <Typography variant="body-base" component="p" theme="gray">
                                    Ajoute une photo ou un avatar afin que l'on puisse avoir une tête avec cette personnalité.
                                </Typography>
                            </div>
                        </div>
                        <div className="flex items-center h-full col-span-6 px-36">
                            <div className="flex justify-center w-full">
                                <UploadAvatar />
                            </div>
                        </div>
                    </Container>
                </div>
                <OnboardingFooter 
                    prev={prev}
                    next={next}
                    isFinalStep={isFinalStep}
                    isLoading={isLoading}
                />
            </div>
    )
} 