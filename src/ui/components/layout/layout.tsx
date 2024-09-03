import { Container } from "../container/container"
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs"
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigation"
import { UserAccountNavigation } from "../navigation/user-account-navigation"
import { Session } from "../session/session"
import { sessionStatusType } from "@/types/session-status-type"

interface Props {
    children?: React.ReactNode
    isDisplayBreadcrumbs?: boolean;
    withSidebar?: boolean
    sessionStatus?: sessionStatusType
}

export const Layout = ({ children, isDisplayBreadcrumbs = true, withSidebar, sessionStatus }: Props) => {

    let view: React.ReactElement = <></>

    if (withSidebar) {
        view = (
            <Container className="mb-14">
                <div className="grid grid-cols-12 gap-7">
                    <div className="col-span-3">
                        <UserAccountNavigation />
                    </div>
                    <div className="col-span-9">{children}</div>
                </div>
            </Container>
        )
    }
    else {
        view = <>{children}</>
    }

    return (
        <Session sessionStatus={sessionStatus}>
            <Navigation />
            {isDisplayBreadcrumbs && <Breadcrumbs />}
            {view}
            <Footer />
        </Session>
    )
}