// COMPONENT
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo";

// DESIGN SYSTEM
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

// ICO
import { ImAmazon } from "react-icons/im";
import { RiFacebookBoxFill, RiSnapchatFill } from "react-icons/ri";

export default function DesignSystem() {
    return (
    <>
        <Seo title = "Coders Monkeys" description = "Description..."/>

      <Layout>
    
        <Container className="py-10 space-y-10">
    
        <div className = "flex items-center gap-4 p-10">
          
        <Spinner size = "small" />
        <Spinner />
        <Spinner size = "large" />
    
        </div>
    
    
        <div className="flex items-center gap-4 p-10">
        
        <Button
        size="small" 
        icon = {{icon : RiSnapchatFill}} 
        iconPosition = "left"
        >
          Accent
        </Button>  
    
        <Button
        size="small" 
        icon = {{icon : ImAmazon}}
        >
          Accent
        </Button>
    
        <Button size="small">Accent</Button>
        <Button size="small" variant = "secondary">Secondary</Button>
        <Button size="small" variant = "outline">Accent</Button>
        <Button size="small" variant = "disabled" disabled>Accent</Button>
        <Button size="small" variant = "ico" icon = {{ icon : ImAmazon}} />
    
        </div>
    
        <div className="flex items-center gap-4 p-10">
        
        <Button
        isLoading
        size="small" 
        icon = {{icon : ImAmazon}} 
        iconPosition = "left"
        >
          Accent
        </Button>  
    
        <Button
        isLoading
        size="small" 
        icon = {{icon : ImAmazon}}
        >
          Accent
        </Button>
    
        <Button isLoading size="small">Accent</Button>
        <Button isLoading size="small" variant = "secondary">Secondary</Button>
        <Button isLoading size="small" variant = "outline">Accent</Button>
        <Button isLoading size="small" variant = "disabled" disabled>Accent</Button>
        <Button isLoading size="small" variant = "ico" icon = {{ icon : ImAmazon}} />
    
        </div>
    
        <div className="flex items-center gap-4 p-10">
          
          <Button>Accent</Button>
          <Button variant = "secondary">Secondary</Button>
          <Button variant = "outline">Accent</Button>
          <Button variant = "disabled" disabled>Accent</Button>
          <Button size="medium" variant = "ico" icon = {{ icon : ImAmazon}} />
      
          </div>
    
          <div className="flex items-center gap-4 p-10">
          
         <div className = "space-y-2">
          <Typography variant = "caption2" weight = "medium">
            Button
          </Typography>
    
          <div className = "flex items-center gap-2 p-5 border border-gray-400 rounded">
    
          <Button size="large">Accent</Button>
          <Button size="large" variant = "secondary">Secondary</Button>
          <Button size="large" variant = "outline">Accent</Button>
          <Button size="large" variant = "disabled" disabled>Accent</Button>
          <Button 
          size="large" 
          variant = "ico" 
          icon = {{ icon : ImAmazon}}
          iconTheme = "secondary" 
          />
          <Button 
          size="large" 
          variant = "ico" 
          icon = {{ icon : ImAmazon}}
          iconTheme = "gray" 
          />
          <Button 
          size="large" 
          variant = "ico" 
          icon = {{ icon : ImAmazon}} 
          />
      </div>
      </div>
          </div>
    
         {/* Avatar */}
         <div className = "space-y-2">
          <Typography variant = "caption2" weight = "medium">
            Avatar
          </Typography>
          <div className = "flex items-center gap-2 p-5 border border-gray-400 rounded">
    
            <Avatar 
            size = "small" 
            src = "/assets/images/lsp.png" 
            alt = "Avatar de CenterEND" 
            />
    
            <Avatar 
            src = "/assets/images/lsp.png" 
            alt = "Avatar de CenterEND" 
            />
            <Avatar 
            size="large" 
            src = "/assets/images/photo-delicieux-hamburger-isole-fond-blanc.jpg" 
            alt = "Avatar de CenterEND" 
            />
            
          </div>
        </div>
    
          {/* Logo */}
        <div className = "space-y-2">
          <Typography variant = "caption2" weight = "medium">
            Logo
          </Typography>
          <div className = "flex items-center gap-2 p-5 border border-gray-400 rounded">
            <Logo size="very-small" />
            <Logo size="small" />
            <Logo />
            <Logo size="large" />
          </div>
        </div>
    
        <div className = "space-y-5">
          
        <Typography variant = "display" component = "div">
          Anilton
          </Typography>
          <Typography theme = "primary" variant = "body-lg" component = "h1">
          Kle king
          </Typography>
          <Typography theme = "secondary" variant = "lead" component = "div">
          Coders Monkeys
          </Typography>
          <Typography variant = "body-sm" component = "div">
          Coders Monkeys
          </Typography>
          <Typography variant = "caption4" component = "div">
          Coders Monkeys
          </Typography>
          <Typography variant = "caption4" weight = "medium" component = "div">
          Coders Monkeys
          </Typography>
          
        </div>
        </Container>

        </Layout>
    </>
    );

}