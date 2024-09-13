import { useAuth } from "@/context/AuthUserContext"
import { useToggle } from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-step-list"
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { ProfileStepForm } from "../profile-step/profile-step-form";
import { Typography } from "@/ui/design-system/typography/typography";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { Container } from "@/ui/components/container/container";
import { Logo } from "@/ui/design-system/logo/logo";
import { firestoreUpdateDocument } from "@/api/firestore";
import { toast } from "react-toastify";

export const FinalStep = ({isFinalStep}: BaseComponentProps) => {
    const  { authUser, reloadAuthUserData } = useAuth();
    const { value: isLoading, toggle } = useToggle()

    const handleCloseOnboarding = async () => {
        toggle()
        const data = {
            onboardingIsCompleted: true,
        }
        const {error} = await firestoreUpdateDocument(
            "users",
            authUser.uid,
            data
        )
        if (error) {
            toggle()
            toast.error(error.message)
            return
        }
        reloadAuthUserData();
        toggle();
    }

    return (
        <div className="relative h-screen pb-[91px]">
                <div className="h-full overflow-auto">
            <Container className="h-full">
                <div className="relative z-10 flex items-center h-full py-10">
                <div className="w-full maw-w-xl mx-auto space-y-5 pb-4.5">
                    <div className="flex justify-center">
                        <Logo size="large" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Typography variant="h1" component="h1">
                            Félicitations !
                        </Typography>
                        <Typography variant="body-base" component="p" theme="gray">
                            Tu fais maintenant partie de notre équipe de développeur !
                            Bien joué à toi Barbe Noire...
                        </Typography>
                        </div>
                </div>
            </div>
            </Container>
        </div>
        <OnboardingFooter
            isFinalStep={isFinalStep}
            next={handleCloseOnboarding}
            isLoading={isLoading}
        />
    </div>
    )
}