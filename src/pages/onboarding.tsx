import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { REGISTERED } from "@/lib/session-status";
import { Session } from "@/ui/components/session/session";
import { OnboardingContainer } from "@/ui/module/onboarding/onboarding.container";



export default function Onboarding() {
  return (
    <>
    <Seo title = "OnBoarding" 
    description = "Descrpition de la page onboarding"/>


      <Session sessionStatus={REGISTERED}>
        <OnboardingContainer />
      </Session>
    
    </>
  );
} 