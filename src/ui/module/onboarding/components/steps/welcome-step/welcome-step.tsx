import { BaseComponentProps } from "@/types/onboarding-step-list"
import { Button } from "@/ui/design-system/button/button"
import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { OnboardingTabs } from "../../tabs/onboarding-tabs"

export const WelcomeStep = ({
    next,
    isFirstStep,
    isFinalStep,
    stepsList,
    getCurrentStep,
} : BaseComponentProps
) => {
    return <div className="relative h-screen pb-[91px]">
        <div className="h-full overflow-auto">
            <Container className="grid h-full grid-cols-12">
                <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                    <div className="w-full space-y-5 pb-4.5">
                        <OnboardingTabs
                            tabs={stepsList}
                            getCurrentStep={getCurrentStep}
                        />
                        <Typography variant="h1" component="h1">
                            Bienvenue l'app FaFoFri !
                        </Typography>
                        <Typography variant="body-base" component="p" theme="gray">
                            Viens rejoindre notre groupe de développeurs compétents sur FaFoFri,
                            N'oublions pas les bases la famille, le football et les amis,
                            Bonne inscription à toi jeune entrepreneur !
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center h-full col-span-6 px-36">
                    <div className="w-full">
                        <Image 
                            src="/assets/images/fafofri-arrondi.png"
                            alt="Illustration du logo de mon équipe"
                            width={406}
                            height={250}
                        />
                    </div>
                </div>
            </Container>
        </div>
        <OnboardingFooter 
            next={next}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
        />
    </div>
}