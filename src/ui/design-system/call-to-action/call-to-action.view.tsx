import { Container } from "@/ui/components/container/container"
import { Typography } from "../typography/typography"
import { Button } from "../button/button"
import { LinkTypes } from "@/lib/link-type"
import Image from "next/image"

export const CallToActionView = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            <Container className="py-20">
                <div className="relative z-10 max-w-3xl space-y-5">
                    <Typography variant="h2" theme="white" component="h2">
                        N'attend pour développer tes compétences...
                    </Typography>

                <div>
                    <Button 
                    variant="success" 
                    baseUrl="#/" 
                    linkType={LinkTypes.EXTERNAL}
                    >
                        Formation react.js gratuite
                    </Button>
                </div>

                </div>

                <div>
                    <Image 
                    width={290} 
                    height={290} 
                    src="/assets/svg/benfica.ico" 
                    alt="Le Logo de l'équipe SL Benfica"
                    className="absolute -bottom-[-15px] right-[200px]"
                    />
                </div>

            </Container>
        </div>
    )
}