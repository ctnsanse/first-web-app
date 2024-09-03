import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ForgetPasswordContainer } from "@/ui/module/landing-page/authentification/forget-password/forget-password.container";
import { GUEST } from "@/lib/session-status";



export default function ForgetPasseword() {
  return (
    <>
    <Seo title = "Connexion sur FaFoFri" 
    description = "Page de connexion"/>

    <Layout sessionStatus={GUEST}>
        <ForgetPasswordContainer/>
    </Layout>
    
    </>
  );
}
