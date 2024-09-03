import { Seo } from "@/ui/components/seo";
import { Layout } from "@/ui/components/layout/layout";
import { RegisterContainer } from "@/ui/module/landing-page/authentification/register/register.container";
import { GUEST } from "@/lib/session-status";



export default function Register() {
  return (
    <>
    <Seo title = "Inscription sur FaFoFri" description = "Page de inscription"/>

    <Layout sessionStatus={GUEST}>
        <RegisterContainer />
    </Layout>
    
    </>
  );
}