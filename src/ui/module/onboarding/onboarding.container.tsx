import { useState } from "react"
import { OnboardingView } from "./onboarding.view"
import { WelcomeStep } from "./components/steps/welcome-step/welcome-step"
import { onboardingStepsListInterface } from "@/types/onboarding-step-list"
import { ProfileStep } from "./components/steps/profile-step/profile-step"

export const OnboardingContainer = () => {

    const [currentStep, setCurrentStep] = useState<number>(1)

    // Notre liste qui va driver tous ça, avec tout les éléments que nous avons besoin
    const stepsList: onboardingStepsListInterface[] = [
        {
            id: 1,
            label: "Bienvenue",
            component: { step: WelcomeStep }
        },
        { 
            id: 2,
            label: "Profile",
            component: { step: ProfileStep } 
        },
        { 
            id: 3,
            label: "Avatar",
            component: { step: WelcomeStep } 
        },
    ]

    // Revoyer l'infomation en fonction de l'état actuel
    const getCurrentStep = () => {
        return stepsList.find((element) => element.id === currentStep)
    }

    // Permettre de d'aller à l'étape suivante
    const next = () => {
        if (currentStep < stepsList.length) {
            setCurrentStep(currentStep + 1)
        }
    }

    // Permettre de revenir à l'étape précédante
    const prev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    // Permetre d'identifier si nous sommes sur une étape de démarrage
    const isFirstStep = () => {
        if (currentStep === 1) {
            return true
        }
        return false
    }

    // Permetre d'identifier si nous sommes sur une étape finale
    const isFinalStep = () => {
        if (currentStep === stepsList.length) {
            return true
        }
        return false
    }

    // Ici c'est la vue
    return (
    <OnboardingView 
    getCurrentStep={getCurrentStep}
    next={next}
    prev={prev}
    isFirstStep={isFirstStep}
    isFinalStep={isFinalStep}
    stepsList={stepsList}
    />
)
}