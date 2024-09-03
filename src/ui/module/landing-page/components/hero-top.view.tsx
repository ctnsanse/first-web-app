import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const HeroTopView = () => {
    return (
        <Container className="relative pt-40 pb-52 overflow-hidden">

            <div className="w-full max-w-2xl space-y-5">
                
                <Typography variant="h1" component="h1" className="max-w-lg">
                    Anilton & Kle les indestructibles
                    </Typography>

                    <Typography variant="body-lg" theme="gray" component="p" className="max-w-xl">
                    Ici, on se prend pas la tête, mais on code comme des bêtes !
                    Rejoins notre tribu de robots codeurs, partage tes projets
                    les plus fous et fais-toi de nouveaux amis développeurs.
                    </Typography>

                    <div className="space-x-5 pt-2.5">

                        <Button baseUrl="">Commmencer</Button>
                        <Button baseUrl="" variant="secondary">En savoir plus{""}</Button>

                        </div>           
            </div>

            <Image
            src="/assets/svg/code.svg"
            alt="Illustration d'un code pour matérialiser l'évolution du level des développeurs front-end"
            width={611}
            height={396}
            className="absolute top-0 right-0 z-0"
            />

        </Container>
    )
}