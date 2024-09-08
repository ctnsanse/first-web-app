import { RiCamera2Fill } from "react-icons/ri"

export const UploadAvatar = () => {
    return (
    <div className="flex items-center gap-5">
        <label>
            <div className="flex items-center gap-2">
                <RiCamera2Fill />
                <span>Choisir un fichier</span>
            </div>
            <input type="file" className="hidden" />
        </label>
    </div>
    )
}