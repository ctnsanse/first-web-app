import { BaseComponentProps } from "@/types/onboarding-step-list"


export const OnboardingView = ({
    getCurrentStep,
    next,
    prev,
    isFirstStep,
    isFinalStep,
    stepsList,
}: BaseComponentProps) => {
    if (getCurrentStep() ?.component) {
    // Récuprérer en fonction de la step actuelle, chercher la propriété composant et step
    const Component = getCurrentStep()?.component.step

        return (
            <div>
                {
                    Component && (
                        <Component
                        getCurrentStep={getCurrentStep}
                        next={next}
                        prev={prev}
                        isFirstStep={isFirstStep}
                        isFinalStep={isFinalStep}
                        stepsList={stepsList}
                        />
                    )
                }
            </div>
        )
    }

    return null
}