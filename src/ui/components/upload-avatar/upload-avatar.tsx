import { Avatar } from "@/ui/design-system/avatar/avatar"
import clsx from "clsx"
import { RiCamera2Fill } from "react-icons/ri"

interface Props {
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
    imagePreview: string | ArrayBuffer | null
    uploadProgress: number
    isLoading: boolean
}
export const UploadAvatar = ({
    handleImageSelect,
    imagePreview,
    uploadProgress,
    isLoading,
}: Props) => {

    const uploadProgressBarStyle = `fixed top-0 w-full h-1 bg-secondary animate ${uploadProgress > 0 ? "" : "hidden"}`

    return (
    <div className="flex items-center gap-5">
        <label className={clsx(
            isLoading ? "cursor-not-allowed" : "cursor-pointer",
            "inline-block bg-primary hover:bg-primary-400 text-white rounded px-[18px] py-[10px] text-caption2 font-medium animate text-center"
            )}>
            <div className="flex items-center gap-2">
                <RiCamera2Fill />
                <span>Choisir un fichier</span>
            </div>
            <input 
            type="file"
            disabled={isLoading} 
            className="hidden" 
            onChange={handleImageSelect} 
            />
        </label>
        <Avatar 
            size="extra-large" 
            alt="Avatar"
            isLoading={isLoading} 
            src={
                imagePreview ?
                typeof imagePreview === "string" 
                ? imagePreview 
                : String(imagePreview) : "assets/svg/camera.svg"
            } 
        />
    </div>
    )
}