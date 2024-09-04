import { BaseComponentProps } from "@/types/onboarding-step-list"
import { Button } from "@/ui/design-system/button/button"
import { OnboardingFooter } from "./footer/onboarding-footer"

export const WelcomeStep = ({
    next,
    isFirstStep,
    isFinalStep
} : BaseComponentProps
) => {
    return <div className="relative h-screen">
        Welcome Step Component
        <OnboardingFooter 
            next={next}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
        />
    </div>
}