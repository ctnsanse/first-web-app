import { Container } from "@/ui/components/container/container";
import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { ImAmazon, ImAndroid } from "react-icons/im";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Logo } from "@/ui/design-system/logo/logo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/navigation/footer";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/module/landing-page/landing-page.container";


export default function Home() {
  return (
    <>
    <Seo title = "FaFoFri" description = "Description..."/>

    <Layout isDisplayBreadcrumbs={false}>
      <LandingPageContainer />
    </Layout>
    
    </>
  );
}
