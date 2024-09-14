import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { ProfileContainer } from "@/ui/module/user-profile/profile/profile.container";
import { GUEST, REGISTERED } from "@/lib/session-status";



export default function UserAccount() {
  return (
    <>
    <Seo title = "Mon espace" 
    description = "Descrpition de la page"/>

    <Layout withSidebar sessionStatus={REGISTERED}>
      <ProfileContainer />
    </Layout>
    
    </>
  );
} 