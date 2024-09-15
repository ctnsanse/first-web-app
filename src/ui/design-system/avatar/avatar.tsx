import Image from "next/image";
import clsx from "clsx";
import { CgOverflow } from "react-icons/cg";
import { Spinner } from "../spinner/spinner";

interface Props {
    size?: "small" | "medium" | "large" | "extra-large"
    src: string;
    alt: string;
    isLoading?: boolean;
}

export const Avatar = ({ size = "medium", src, alt, isLoading }: Props) => {

    let sizeStyles: string = "";

    switch (size) {

        case "small":
            sizeStyles = "w-[24px] h-[24px]";
            break;

        case "medium": // Default
            sizeStyles = "w-[34px] h-[34px]";
            break;

        case "large":
            sizeStyles = "w-[50px] h-[50px]";
            break;

        case "extra-large":
            sizeStyles = "w-[90px] h-[90px]";
            break;
    }

    return (
    <div className = {clsx(sizeStyles,
    isLoading && "flex items-center justify-center",
    "relative bg-gray-300 rounded-full overflow-hidden"
    )}
    >

        <div className={clsx(
            isLoading ? "opacity-40" : "opacity-0",
            "absolute z-10 w-full bg-white animate"
        )}
        />

        <Image 
            fill
            src = {src ? src: "/assets/svg/avatar-default.svg"}
            alt = {alt}
            className = {clsx(
                isLoading && "blur-[2px]",
                "object-cover object-center rounded-full animate"
            )}
        />

        {isLoading && <Spinner className="relative z-20" />}
    </div>
    );
}