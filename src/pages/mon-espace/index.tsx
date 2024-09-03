import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { UserAccountContainer } from "@/ui/module/user-profile/user-account/user-account.container";
import { GUEST, REGISTERED } from "@/lib/session-status";



export default function Connexion() {
  return (
    <>
    <Seo title = "Mon espace" 
    description = "Descrpition de la page"/>

    <Layout withSidebar sessionStatus={REGISTERED}>
      <UserAccountContainer />
    </Layout>
    
    </>
  );
} 