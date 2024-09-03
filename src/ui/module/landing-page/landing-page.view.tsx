import { CallToActionView } from "@/ui/design-system/call-to-action/call-to-action.view";
import { CurrentCourseCtaView } from "./components/current-course-cta/current-course-cta.view";
import { FafofriSlackView } from "./components/fafofri-slack/fafofri-slack.view";
import { FeaturedView } from "./components/featured/featured.view";
import { HeroTopView } from "./components/hero-top.view";
import { HighlightListView } from "./components/highlight-list/highlight-list.view";

export const LandingPageView = () => {
    return (
    <>
    <HeroTopView />
    <FeaturedView />
    <FafofriSlackView />
    <CurrentCourseCtaView />
    <HighlightListView />
    <CallToActionView />
    </>
    );
};