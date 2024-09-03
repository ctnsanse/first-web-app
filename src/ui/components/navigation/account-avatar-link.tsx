import { Avatar } from "@/ui/design-system/avatar/avatar"
import Link from "next/link"

export const AccountAvatarNavigationLink = () => {
    return (
        <Link href="/mon-espace" className="flex items-center gap-2">
            <Avatar src="" alt="avatar de l'utilisateur" size="large" />
        </Link>
    )
}