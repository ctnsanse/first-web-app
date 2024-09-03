import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Button } from "@/ui/design-system/button/button";
import { RiArrowRightLine } from "react-icons/ri";
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";

interface FeaturedListInterface {

    imagePath: string,
    imageAlt: string,
    title: string,
    description: string,

}

const featuresData: FeaturedListInterface[] = [

    {
        imagePath: "/assets/svg/genetic-data-svgrepo-com.svg",
        imageAlt: "illustration",
        title: "Resources",
        description: "Consulte et partage des ressources pour les devs",
    },

    {
        imagePath: "/assets/svg/loan-svgrepo-com.svg",
        imageAlt: "illustration",
        title: "Entraînement",
        description: "Entraine-toi à devenir meilleur et trouve de l'inspiration",
    },

    {
        imagePath: "/assets/svg/earth-svgrepo-com.svg",
        imageAlt: "illustration",
        title: "Visibilité",
        description: "Expose tes projets et crée toi des opportunités !",
    },

    {
        imagePath: "/assets/svg/star-struck-svgrepo-com.svg",
        imageAlt: "illustration",
        title: "Relation",
        description: "Connecte-toi avec des devs web et booste ta carrière !",
    },
]


export const FeaturedView = () => {

    const featuredList = featuresData.map((feature) => (
        <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white p-7">

            <div className="relative w-[130px] h-[130px] rounded mb-6 p-10 overflow-hidden">

                <Image 
                fill 
                src={feature.imagePath} 
                alt={feature.imageAlt} 
                className="object-scale-down blur-2xl" />

                <Image 
                fill 
                src={feature.imagePath} 
                alt={feature.imageAlt} 
                className="object-scale-down" />

            </div>

            <Typography variant="lead" component="h3" weight="medium" className="text-center mb-2.5">
                {feature.title}
            </Typography>
            <Typography variant="body-base" component="p" theme="gray" className="text-center">
                {feature.description}
            </Typography>
        </div>
    ));

    return (
        <div className="bg-gray-300">

            <Container className="grid grid-cols-12 gap-24 py-24">

                <div className="grid grid-cols-2 col-span-7 gap-7">{featuredList}</div>

                <div className="flex flex-col justify-between col-span-5 gap-10">

                    <div>

                        <Typography 
                        variant="h2" 
                        component="h2" 
                        className="mb-5">
                            L'endroit le plus cool pour devenir développeur
                        </Typography>

                        <Typography 
                        variant="body-lg" 
                        component="p" 
                        theme="gray" 
                        className="mb-8">
                            Du partage, des connexions et des formations notre 
                            app gère tout ça pour toi. Rejoins la communauté et 
                            grimpe en grade. Let's go{""}
                        </Typography>

                        <Button variant="secondary" baseUrl="/#" icon={{icon: RiArrowRightLine}} iconPosition="right">
                            Commencer
                        </Button>

                    </div>

                    <div>

                    <Typography 
                        variant="caption3" 
                        component="div" 
                        theme="gray" 
                        className="mb-4">
                            Mes réseaux sociaux
                        </Typography>

                        <SocialNetworksButtons />

                    </div>

                </div>

            </Container>
        </div>
    );
};