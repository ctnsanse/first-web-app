import { Avatar } from "@/ui/design-system/avatar/avatar"
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"

export const AccountAvatarNavigationLink = () => {
    return (
        <Link href="/mon-espace" className="flex items-center gap-2">
            <Avatar src="" alt="avatar de l'utilisateur" size="medium" />
            <div className="max-w-[160px]">
                <Typography variant="caption2" weight="medium" className="truncate">
                    Bonjour Bonsoir
                </Typography>
                <Typography variant="caption4" weight="medium" theme="gray">
                    Mon compte
                </Typography>
            </div>
        </Link>
    )
}