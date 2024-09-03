import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LoginContainer } from "@/ui/module/landing-page/authentification/login/login.container";
import { GUEST } from "@/lib/session-status";



export default function Connexion() {
  return (
    <>
    <Seo title = "Connexion sur FaFoFri" 
    description = "Page de connexion"/>

    <Layout sessionStatus={GUEST}>
        <LoginContainer />
    </Layout>
    
    </>
  );
}