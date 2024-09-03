import { LinkTypes } from "@/lib/link-type"
import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const FafofriSlackView = () => {
    return (
        <Container className="flex justify-between p-12">

            <div className="flex flex-col justify-center max-w-2xl space-y-5">

                <div className="flex items-center gap-4">
                    <Logo size="very-small" />

                    <Typography
                        variant="caption2"
                        component="span"
                        weight="medium">
                        FaFoFri
                    </Typography>
                </div>

                <Typography variant="h2" component="h2">
                    Rejoins-nous sur le Slack des indestructibles ! 
                </Typography>

                <Typography 
                variant="body-lg" 
                component="p" 
                theme="gray" 
                className="max-w-lg"
                >
                    Rejoins-nous et obtiens de l'aide, des conseils et pourquoi
                    pase des nouveaux potes ! {""}
                </Typography>

                <Button baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
                    Rejoindre le groupe d'aide
                </Button>

            </div>

            <div className="relative w-[350px] h-[350px]">
                <Image
                    fill
                    src={"/assets/svg/slack-icon.svg"}
                    alt={"Slack logo"}
                />
            </div>

        </Container> 
    )
}